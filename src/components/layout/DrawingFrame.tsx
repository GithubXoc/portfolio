const columns = ['1', '2', '3', '4', '5', '6', '7', '8'];
const rows = ['A', 'B', 'C', 'D', 'E', 'F'];

function ZoneStrip({ labels, vertical = false }: { labels: string[]; vertical?: boolean }) {
  return (
    <div className={`flex size-full ${vertical ? 'flex-col' : ''}`}>
      {labels.map((label) => (
        <span
          key={label}
          className={`grid flex-1 place-items-center font-mono text-[9px] text-muted/80 ${
            vertical ? 'border-b border-line/30 last:border-b-0' : 'border-r border-line/30 last:border-r-0'
          }`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

/**
 * Decorative sheet border with zone references (1–8, A–F) around the viewport on wide screens,
 * plus a soft vignette on every screen size.
 */
export default function DrawingFrame() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
      {/* Vignette — darker toward the edges like an old print */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgb(3_20_45_/_0.55))]" />

      <div className="hidden xl:block">
        <div className="absolute inset-5 border border-line/50" />
        <div className="absolute inset-x-5 top-0 h-5">
          <ZoneStrip labels={columns} />
        </div>
        <div className="absolute inset-x-5 bottom-0 h-5">
          <ZoneStrip labels={columns} />
        </div>
        <div className="absolute inset-y-5 left-0 w-5">
          <ZoneStrip labels={rows} vertical />
        </div>
        <div className="absolute inset-y-5 right-0 w-5">
          <ZoneStrip labels={rows} vertical />
        </div>
      </div>
    </div>
  );
}
