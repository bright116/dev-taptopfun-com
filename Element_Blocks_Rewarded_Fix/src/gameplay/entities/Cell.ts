namespace BlockPuzzle {
    export class Cell extends Phaser.Group {

        public readonly board: Board;
        public readonly boardManager: BoardManager;
        public readonly level: Level;

        protected cellSprite: Phaser.Sprite;
        protected highlightSprite: Phaser.Sprite;
        protected block: Block;

        private forceHighlighting: boolean = false;

        public readonly posX: number;
        public readonly posY: number;

        constructor(board: Board, posX: number, posY: number) {
            super(board.game);
            this.board = board;
            this.boardManager = board.boardManager;
            this.level = this.boardManager.level;
            this.posX = posX;
            this.posY = posY;

            this.buildContent();
        }

        protected buildContent() {
            this.cellSprite = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'cell000' + Math.floor(Math.random() * 3)));
            this.cellSprite.anchor.set(0.5);

            this.highlightSprite = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'block0000'));
            this.highlightSprite.anchor.set(0.5);
            this.highlightSprite.alpha = 0.5;
            this.highlightSprite.visible = false;

            this.block = null;
        }

        public equalsTo(anotherCell: Cell): boolean {
            return this.posX === anotherCell.posX && this.posY === anotherCell.posY;
        }

        public isEmpty(): boolean {
            return this.block == null;
        }

        public hasBlock(): boolean {
            return !this.isEmpty();
        }

        public getBlock(): Block {
            return this.block;
        }

        public disposeBlock(delay: number, deactivateBeforeDisposing: boolean) {
            if(this.hasBlock()) {
                if(deactivateBeforeDisposing) {
                    this.getBlock().deactivate(delay);
                    this.getBlock().dispose(delay + Settings.BLOCK_DEACTIVATION_TWEEN_DURATION);
                } else {
                    this.getBlock().dispose(delay);
                }
                this.block = null;
            }
        }

        public placeBlock(block: Block) {
            const blockLocalPosition: PIXI.Point = this.board.blocksContainer.toLocal(block.position, block.parent);
            this.block = this.board.blocksContainer.add(block);
            this.block.posX = this.posX;
            this.block.posY = this.posY;
            this.block.position.set(blockLocalPosition.x, blockLocalPosition.y);

            this.game.tweens.removeFrom(this.block, false);
            this.game.tweens.removeFrom(this.block.scale);

            this.game.add.tween(this.block)
                .to({x: this.x, y: this.y}, 130, Phaser.Easing.Circular.Out, true, 0);

            this.game.add.tween(this.block.scale)
                .to({x: 1, y: 1}, 120, Phaser.Easing.Cubic.In, true, 0);

            APIUtils.instance.trackStatsChange('total_blocks_placed', 1);
            APIUtils.instance.trackStatsChange(`${BlockPuzzle.BlockColor[block.color].toLowerCase()}_blocks_placed`, 1);
        }

        public destroyBlock(delay: number) {
            if(this.block) {
                APIUtils.instance.trackStatsChange('total_blocks_destroyed', 1);
                APIUtils.instance.trackStatsChange(`${BlockPuzzle.BlockColor[this.block.color].toLowerCase()}_blocks_destroyed`, 1);
                this.block.animateDestroying(this.board.explosionsContainer, delay);
                this.block = null;
            }
        }

        public applyAlphaHighlighting(value: boolean) {
            if(this.hasBlock()) {
                this.getBlock().alpha = value ? Settings.POWERUP_HIGHLIGHTING_ALPHA : 1;
            } else {
                this.alpha = value ? Settings.POWERUP_HIGHLIGHTING_ALPHA : 1;
            }
        }

        public resetAlphaHighlighting() {
            if(this.hasBlock()) {
                this.getBlock().alpha = 1;
            }
            this.alpha = 1;
        }

        public showHighlighting(color: BlockColor, forced: boolean) {
            if(forced) {
                this.forceHighlighting = true;
            }
            if(this.isEmpty()) {
                this.highlightSprite.frameName = 'block000' + color;
                this.highlightSprite.visible = true;
            } else {
                this.block.setTemporalColor(color);
            }
        }

        public resetView(force: boolean) {
            if(force) {
                this.forceHighlighting = false;
            }
            if(!this.forceHighlighting) {
                this.highlightSprite.visible = false;
            }
            if(!this.isEmpty()) {
                this.block.setColor(this.block.color);
            }
        }


    }
}