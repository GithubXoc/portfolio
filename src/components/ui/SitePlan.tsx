import { useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';

/*
 * A small site-plan drawing: a street grid, building footprints and a tracked route from A to B.
 * Every outline is a <path pathLength="1"> so the CSS `.bp-draw` animation can "plot" it in.
 */

const rect = (x: number, y: number, w: number, h: number) => `M${x} ${y}h${w}v${h}h${-w}Z`;
const circle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`;

type Box = [x: number, y: number, w: number, h: number, hatched?: boolean];

const buildings: Box[] = [
  // north-west block
  [24, 24, 90, 54, true],
  [130, 24, 60, 102],
  [206, 24, 74, 40],
  [206, 80, 74, 46, true],
  [24, 94, 90, 32],
  // north-east block
  [346, 24, 110, 60],
  [346, 100, 48, 30, true],
  [408, 100, 48, 30],
  // south-west block
  [24, 198, 120, 56],
  [24, 270, 56, 48, true],
  [96, 270, 48, 48],
  [164, 198, 116, 120],
  // south-east block
  [346, 198, 110, 44, true],
  [346, 258, 110, 60],
];

// Road edges, broken at the intersection.
const roads = [
  'M0 150H300M326 150H480',
  'M0 176H300M326 176H480',
  'M300 0V150M300 176V340',
  'M326 0V150M326 176V340',
];

const route = 'M52 163H313V288H379';

const style = (delay: number) => ({ '--d': `${delay}s` }) as CSSProperties;

export default function SitePlan() {
  const reduceMotion = useReducedMotion();

  return (
    <svg viewBox="0 0 480 340" className="block h-auto w-full" role="img" aria-label="Site plan drawing">
      <defs>
        <pattern id="bp-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0V6" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1" />
        </pattern>
      </defs>

      <g fill="none" stroke="#d7e6f8" strokeWidth="1.25" strokeLinejoin="miter">
        {/* Roads + dashed centre lines */}
        {roads.map((d, i) => (
          <path key={d} d={d} pathLength={1} className="bp-draw" style={style(0.1 * i)} />
        ))}
        <path
          d="M0 163H480M313 0V340"
          stroke="#d7e6f8"
          strokeOpacity="0.35"
          strokeDasharray="6 6"
          className="bp-fade"
          style={style(0.9)}
        />

        {/* Buildings */}
        {buildings.map(([x, y, w, h, hatched], i) => (
          <g key={`${x}-${y}`}>
            {hatched && (
              <path d={rect(x, y, w, h)} fill="url(#bp-hatch)" stroke="none" className="bp-fade" style={style(1 + i * 0.06)} />
            )}
            <path d={rect(x, y, w, h)} pathLength={1} className="bp-draw" style={style(0.4 + i * 0.06)} />
          </g>
        ))}

        {/* Structural grid inside the large building */}
        <path
          d="M203 198V318M242 198V318M164 238H280M164 278H280"
          strokeOpacity="0.35"
          strokeDasharray="3 4"
          className="bp-fade"
          style={style(1.6)}
        />

        {/* Plaza */}
        <path d={circle(401, 288, 22)} pathLength={1} className="bp-draw" style={style(1.3)} />

        {/* Dimension over the large building */}
        <g className="bp-fade" style={style(1.8)} strokeOpacity="0.8">
          <path d="M164 186V194M280 186V194M164 190H280" />
          <text x="222" y="185" fill="#a6c0e0" stroke="none" fontSize="9" textAnchor="middle" fontFamily="IBM Plex Mono, monospace">
            116.0
          </text>
        </g>
      </g>

      {/* Tracked route A → B */}
      <path
        d={route}
        fill="none"
        stroke="#ffd34d"
        strokeWidth="2"
        strokeDasharray="5 5"
        className="bp-fade"
        style={style(2)}
      />
      <g stroke="#ffd34d" fill="none" strokeWidth="1.5" className="bp-fade" style={style(2.1)}>
        <path d={circle(52, 163, 7)} />
        <path d="M40 163H64M52 151V175" strokeWidth="1" />
        <path d={circle(401, 288, 7)} />
        <path d="M389 288H413M401 276V300" strokeWidth="1" />
      </g>
      <g fill="#ffd34d" fontFamily="IBM Plex Mono, monospace" fontSize="11" className="bp-fade" style={style(2.1)}>
        <text x="46" y="146">A</text>
        <text x="415" y="276">B</text>
      </g>

      {/* Moving "tracked" unit */}
      {!reduceMotion && (
        <g className="bp-fade" style={style(2.4)}>
          <circle r="4" fill="#ffd34d">
            <animateMotion dur="6s" repeatCount="indefinite" path={route} />
          </circle>
          <circle r="4" fill="none" stroke="#ffd34d">
            <animateMotion dur="6s" repeatCount="indefinite" path={route} />
            <animate attributeName="r" values="4;12" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </g>
      )}
    </svg>
  );
}
