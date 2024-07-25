import React from "react";

export default function NotificationSection() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <div>
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m0 0h24v24h-24z" fill="none" />
          <path d="m22 8.98v9.02c0 1.1-.9 2-2 2h-16c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h10.1c-.06.32-.1.66-.1 1s.04.68.1 1h-10.1l8 5 3.67-2.29c.47.43 1.02.76 1.63.98l-5.3 3.31-8-5v10h16v-8.1c.74-.15 1.42-.48 2-.92zm-6-3.98c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" />
        </svg>
      </div>

      <div>
        <svg
          width="24"
          height="24"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.1336 11C18.7155 16.3755 21 18 21 18H3C3 18 6 15.8667 6 8.4C6 6.70261 6.63214 5.07475 7.75736 3.87452C8.88258 2.67428 10.4087 2 12 2C12.3373 2 12.6717 2.0303 13 2.08949"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
