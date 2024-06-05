type Props = {
  className?: string;
};

export default function ClickHere(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className={`${props.className} inline align-text-top`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path
          id="primary"
          d="M18,15v4a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V7a1,1,0,0,1,1-1H9"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={1.8}
          stroke="currentColor"
        ></path>
        <path
          id="primary-2"
          data-name="primary"
          d="M20.57,8.47,14,4V7c-5.35.19-7.06,4.58-7.06,9,0,0,2.45-4.27,7.06-4.48v3L20.57,10A1,1,0,0,0,20.57,8.47Z"
          fill="currentColor"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="none"
        ></path>
      </g>
    </svg>
  );
}
