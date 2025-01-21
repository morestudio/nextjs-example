type Props = {
  children: React.ReactNode;
};

export default function ExampleLayout({ children }: Props) {
  return (
    <div className="container mx-auto my-5 max-w-screen-md">
      <h1>Example Layout</h1>
      {children}
    </div>
  );
}
