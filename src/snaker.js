class Snaker {
    constructor(selector, options = {}) {
        this.container = document.querySelector(selector);
        this.blocks = Array.from(this.container.children);

        // Додаємо значення за замовчуванням для options
        this.options = {
            strokeStyle: options.strokeStyle || "#ccc",
            lineWidth: options.lineWidth || 2,
            rounded: options.rounded || 0,
            borderStyle: options.borderStyle || "solid", // New option for border style
        };

        this.init();
    }

    init() {
        // Створюємо canvas для ліній
        this.canvas = document.createElement("canvas");
        this.canvas.style.position = "absolute";
        this.canvas.style.top = 0;
        this.canvas.style.left = 0;
        this.canvas.style.zIndex = -1;
        this.container.appendChild(this.canvas);

        this.flow();
    }

    flow() {
        this.resizeCanvas();
        this.drawLines();
    }

    resizeCanvas() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
    }

    drawLines() {
        const ctx = this.canvas.getContext("2d");
        // Налаштування стилю лінії
        ctx.strokeStyle = this.options.strokeStyle;
        ctx.lineWidth = this.options.lineWidth;

        // Set line dash pattern based on borderStyle
        if (this.options.borderStyle === "dashed") {
            ctx.setLineDash([5, 5]); // Adjust dash pattern as needed
        } else {
            ctx.setLineDash([]); // Solid line
        }

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.blocks.forEach((block, index) => {
            const nextBlock = this.blocks[index + 1];

            if (!nextBlock) {
                return;
            }

            const startX = block.offsetLeft + block.offsetWidth / 2;
            const startY = block.offsetTop + block.offsetHeight / 2;
            const endX = nextBlock.offsetLeft + nextBlock.offsetWidth / 2;
            const endY = nextBlock.offsetTop + nextBlock.offsetHeight / 2;

            ctx.beginPath();
            ctx.moveTo(startX, startY);

            if (startY === endY) {
                // If both blocks are horizontally aligned, draw a straight line
                ctx.lineTo(endX, endY);
            } else if (startX === endX) {
                // If both blocks are vertically aligned, draw a vertical line
                ctx.lineTo(endX, endY);
            } else {
                // Draw a curved line if the blocks are at different heights
                const midY = startY + (endY - startY) / 2;

                ctx.lineTo(startX, midY - this.options.rounded); // Move down along the Y-axis
                ctx.arcTo(startX, midY, endX, midY, this.options.rounded); // First rounded corner
                ctx.lineTo(endX + this.options.rounded, midY); // Draw horizontal line
                ctx.arcTo(endX, midY, endX, endY, this.options.rounded); // Second rounded corner
                ctx.lineTo(endX, endY); // Move to the end point
            }

            ctx.stroke(); // Render the line
        });
    }
}

export default Snaker;