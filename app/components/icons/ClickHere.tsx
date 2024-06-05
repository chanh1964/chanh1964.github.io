type Props = {
  lean?: 'left' | 'right';
  className?: string;
};

export default function ClickHere(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className={`${props.className} inline`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      transform={props.lean == 'right' ? 'matrix(-1, 0, 0, 1, 0, 0)' : ''}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="none"
          stroke="currentColor"
          d="M17.07,20.61H9.79a2,2,0,0,1-2-2,2,2,0,0,1,2-2h1.87L5,9.86a2,2,0,0,1-.19-2.65,1.88,1.88,0,0,1,1.47-.68,1.84,1.84,0,0,1,1.35.55l4.06,4.06,4.08-3.06a1.91,1.91,0,0,1,2.5.18h0A17.18,17.18,0,0,1,22.42,15l.06.19"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          d="M10.63,10.12A4.73,4.73,0,0,0,11,8.17,4.78,4.78,0,1,0,6.26,13a4.67,4.67,0,0,0,1.55-.26"
        ></path>
      </g>
    </svg>
  );
}
