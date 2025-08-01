import React from 'react';

interface StarSvgProps {
  className?: string;
}

const StarSvg: React.FC<StarSvgProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4766 0C15.7481 1.26428 16.7357 2.25188 18 2.52337C16.7357 2.79486 15.7481 3.78246 15.4766 5.04674C15.2052 3.78246 14.2175 2.79486 12.9533 2.52337C14.2175 2.25188 15.2052 1.26428 15.4766 0ZM7.126 0.168227C7.89268 3.73856 10.6817 6.52755 14.252 7.29423C10.6817 8.06091 7.89268 10.8499 7.126 14.4202C6.35932 10.8499 3.57033 8.06091 0 7.29423C3.57033 6.52755 6.35932 3.73856 7.126 0.168227ZM18 13.458C16.3143 13.096 14.9975 11.7792 14.6355 10.0935C14.2735 11.7792 12.9567 13.096 11.271 13.458C12.9567 13.82 14.2735 15.1368 14.6355 16.8225C14.9975 15.1368 16.3143 13.82 18 13.458Z"
        fill="#387FF5"
      />
    </svg>
  );
};

export default StarSvg;