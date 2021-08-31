import { h } from "react"

export const BurgerSVG = () => {
  return (
    <svg width="50" height="50" viewBox="0 0 40 50">
      <g>
        <line
          fill="none"
          id="line_1"
          className="burger"
          strokeWidth="4"
          x1="19"
          x2="4"
          y1="35"
          y2="35"
        />
        <line
          fill="none"
          id="line_2"
          className="burger"
          strokeWidth="4"
          x1="19"
          x2="4"
          y1="24"
          y2="24"
        />
        <line
          fill="none"
          id="line_3"
          className="burger"
          strokeWidth="4"
          x1="19"
          x2="4"
          y1="13"
          y2="13"
        />

        <line
          fill="none"
          id="line_1"
          className="burger"
          strokeWidth="4"
          x1="19"
          x2="36"
          y1="35"
          y2="35"
        />
        <line
          fill="none"
          id="line_2"
          className="burger"
          strokeWidth="4"
          x1="19"
          x2="36"
          y1="24"
          y2="24"
        />
        <line
          fill="none"
          id="line_3"
          className="burger"
          strokeWidth="4"
          x1="19"
          x2="36"
          y1="13"
          y2="13"
        />
      </g>
      <g>
        <path
          d="m20,35c0,0 15,0 15,-15c0,-13.5 -11.5,-9 -16,-4.5c-4.5,4.25 -9.5,13 -11,15"
          fill="none"
          className="brezel"
          strokeWidth="4"
        />
        <path
          d="m20,35c-15,0 -15,-15 -15,-15c0,-13.5 11.5,-9 16,-4.5c4.5,4.25 9.5,13 11,15"
          fill="none"
          className="brezel"
          strokeWidth="4"
        />
      </g>
    </svg>
  )
}
