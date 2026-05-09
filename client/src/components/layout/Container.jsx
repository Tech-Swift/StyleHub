// src/components/layout/Container.jsx

export default function Container({
  children,
  className = "",
  fluid = false,
  noPadding = false,
}) {
  return (
    <div
      className={`
        w-full
        mx-auto

        ${
          fluid
            ? "max-w-none"
            : "max-w-7xl"
        }

        ${
          noPadding
            ? "px-0"
            : fluid
            ? "px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12"
            : "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
        }

        ${className}
      `}
    >
      {children}
    </div>
  );
}