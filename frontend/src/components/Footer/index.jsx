import IconComponent from '../Icons/IconComponent';
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { Tooltip } from "react-tooltip";
import { v4 } from "uuid";

export default function Footer() {
  const [footerData, setFooterData] = useState(false);

  useEffect(() => {
    async function fetchFooterData() {
      // we can set the data of the tooltip and the links here.
      const { footerData } = [];
      setFooterData(footerData);
    }
    fetchFooterData();
  }, []);

  // wait for some kind of non-false response from footer data first
  // to prevent pop-in.
  if (footerData === false) return null;

  return (
    <div className="flex justify-center mb-2">
      <div className="flex space-x-4">
        {footerData?.map((item) => {
          return (
            <ToolTipWrapper key={item.id} id={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 p-2 rounded-full text-white bg-sidebar-button hover:bg-menu-item-selected-gradient hover:border-slate-100 hover:border-opacity-50 border-transparent border"
              aria-label={item.ariaLabel}
              data-tooltip-id={item.id}
              data-tooltip-content={item.tooltip}
            >
              <IconComponent
                iconName={item.icon}
                className="h-5 w-5"
              />
            </a>
          </ToolTipWrapper>
          )
          
        })}
        {!isMobile && <IconComponent iconName={'SettingsButton'} className="h-5 w-5"  />}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center mb-2">
      <div className="flex space-x-4">
        {footerData.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-300 p-2 rounded-full text-white bg-sidebar-button hover:bg-menu-item-selected-gradient hover:border-slate-100 hover:border-opacity-50 border-transparent border"
          >
            {React.createElement(
              ICON_COMPONENTS?.[item.icon] ?? ICON_COMPONENTS.Info,
              {
                weight: "fill",
                className: "h-5 w-5",
              }
            )}
          </a>
        ))}
        {!isMobile && <SettingsButton />}
      </div>
    </div>
  );
}

export function ToolTipWrapper({ id = v4(), children }) {
  return (
    <div className="flex w-fit">
      {children}
      <Tooltip
        id={id}
        place="top"
        delayShow={300}
        className="tooltip !text-xs z-99"
      />
    </div>
  );
}
