import { Button } from "../ui/button";

export default function ProductCard() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star w-5 h-5 fill-warning text-warning"
            aria-hidden="true"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
          </svg>
          <span className="text-base font-semibold text-neutral">4.8</span>
        </div>
        <span className="text-base text-gray-700">(124 reviews)</span>
      </div>
      <h1 className="text-h1 font-heading font-bold text-neutral mb-4">
        Elegant Summer Dress
      </h1>
      <p className="text-h2 font-heading font-bold text-tertiary mb-8">
        $89.99
      </p>
      <p className="text-base text-gray-800 mb-8 leading-relaxed">
        A beautifully crafted summer dress that combines elegance with comfort.
        Made from premium breathable fabric, perfect for warm weather occasions.
      </p>
      <div className="space-y-8 mb-8">
        <div>
          <label className="text-base text-neutral font-semibold mb-4 block">
            Size
          </label>
          <div className="flex gap-3">
            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm px-4 py-2 w-16 h-12 font-normal bg-tertiary text-tertiary-foreground border-tertiary hover:bg-tertiary/90 hover:text-tertiary-foreground">
              XS
            </Button>
            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm px-4 py-2 w-16 h-12 font-normal bg-background text-neutral border-border hover:bg-muted hover:text-neutral">
              S
            </Button>
            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm px-4 py-2 w-16 h-12 font-normal bg-background text-neutral border-border hover:bg-muted hover:text-neutral">
              M
            </Button>
            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm px-4 py-2 w-16 h-12 font-normal bg-background text-neutral border-border hover:bg-muted hover:text-neutral">
              L
            </Button>
            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm px-4 py-2 w-16 h-12 font-normal bg-background text-neutral border-border hover:bg-muted hover:text-neutral">
              XL
            </Button>
          </div>
        </div>
        <div>
          <label className="text-base text-neutral font-semibold mb-4 block">
            Color
          </label>
          <div className="flex gap-3">
            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm py-2 px-6 h-12 font-normal bg-tertiary text-tertiary-foreground border-tertiary hover:bg-tertiary/90 hover:text-tertiary-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check w-4 h-4 mr-2"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Beige
            </Button>
            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm py-2 px-6 h-12 font-normal bg-background text-neutral border-border hover:bg-muted hover:text-neutral">
              White
            </Button>
            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm py-2 px-6 h-12 font-normal bg-background text-neutral border-border hover:bg-muted hover:text-neutral">
              Cream
            </Button>
          </div>
        </div>
        <div>
          <label className="text-base text-neutral font-semibold mb-4 block">
            Quantity
          </label>
          <div className="flex items-center gap-4">
            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm h-12 w-12 bg-background text-neutral border-border hover:bg-muted hover:text-neutral">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-minus w-5 h-5"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
              </svg>
            </Button>
            <span className="text-h4 text-neutral font-semibold w-12 text-center">
              1
            </span>
            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm h-12 w-12 bg-background text-neutral border-border hover:bg-muted hover:text-neutral">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus w-5 h-5"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow h-10 rounded-md px-8 w-full bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 font-normal">
        Add to Cart
      </Button>
    </div>
  );
}
