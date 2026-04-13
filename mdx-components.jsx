export function useMDXComponents(components) {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 mt-10">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mb-4 mt-8">{children}</h2>,
    p: ({ children }) => <p className="text-gray-600 leading-relaxed mb-4">{children}</p>,
    ...components,
  };
}