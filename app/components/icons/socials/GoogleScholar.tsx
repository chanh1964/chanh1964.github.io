type Props = {
  className?: string;
};

export default function GoogleScholar(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-256 -256 1024 1024 "
      width="1em"
      height="1em"
      className={`${props.className} rounded-full`}
    >
      {/* <path fill="currentColor" d="M256 411.12L0 202.667 256 0z" /> */}
      {/* <path fill="currentColor" d="M256 411.12l256-208.453L256 0z" /> */}
      <path
        fill="currentColor"
        d="M121.037 270c25-60 75.392-85.334 134.963-85s120 35 135 90L512 208.453 256 0 0 202.667z"
      />
      <circle fill="currentColor" cx="256" cy="362.667" r="149.333" />
    </svg>
  );
}
