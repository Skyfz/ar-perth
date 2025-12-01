
export default function DesignTestPage() {
    return (
        <div className="min-h-screen bg-background text-foreground p-12 space-y-12">
            <section className="space-y-4">
                <h1 className="text-4xl font-heading font-bold">Typography Test</h1>
                <p className="text-xl text-muted-foreground">
                    This is a subtitle using muted foreground color.
                </p>
                <p>
                    This is standard body text. It should use the Inter font.
                    <span className="font-bold"> This is bold text.</span>
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Color Palette</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-lg bg-primary text-primary-foreground">Primary</div>
                    <div className="p-4 rounded-lg bg-secondary text-secondary-foreground">Secondary</div>
                    <div className="p-4 rounded-lg bg-accent text-accent-foreground">Accent</div>
                    <div className="p-4 rounded-lg bg-muted text-muted-foreground">Muted</div>
                    <div className="p-4 rounded-lg bg-card text-card-foreground border">Card</div>
                    <div className="p-4 rounded-lg bg-popover text-popover-foreground border">Popover</div>
                    <div className="p-4 rounded-lg bg-destructive text-destructive-foreground">Destructive</div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Components & Effects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-panel p-8 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Glass Panel</h3>
                        <p>This should have a blur effect and semi-transparent background.</p>
                    </div>

                    <div className="p-8 rounded-lg border bg-card hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-bold mb-2">Hover Card</h3>
                        <p>Hover me to see shadow transition.</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Animations</h2>
                <div className="flex gap-4">
                    <div className="p-4 bg-primary text-primary-foreground rounded-lg animate-reveal">
                        Reveal Animation
                    </div>
                    <div className="p-4 bg-secondary text-secondary-foreground rounded-lg animate-scale-in">
                        Scale In Animation
                    </div>
                </div>
            </section>
        </div>
    );
}
