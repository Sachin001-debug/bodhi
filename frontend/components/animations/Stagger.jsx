"use client";

import React from "react";
import Reveal from "./Reveal";

/**
 * Stagger: Container that automatically staggers the reveal delay of its children.
 * Stagger step: 90ms by default (within 80-120ms range).
 */
export default function Stagger({
  children,
  staggerDelay = 90,
  initialDelay = 0,
  variant = "fade-up",
  className = "",
  as: Component = "div",
  ...props
}) {
  const childArray = React.Children.toArray(children);

  return (
    <Component className={className} {...props}>
      {childArray.map((child, index) => {
        const computedDelay = initialDelay + index * staggerDelay;

        // If the child is already a Reveal, inject the computed delay
        if (React.isValidElement(child) && child.type === Reveal) {
          return React.cloneElement(child, {
            delay: child.props.delay ?? computedDelay,
            variant: child.props.variant ?? variant,
            key: child.key || index,
          });
        }

        return (
          <Reveal
            key={index}
            delay={computedDelay}
            variant={variant}
            className="w-full"
          >
            {child}
          </Reveal>
        );
      })}
    </Component>
  );
}

