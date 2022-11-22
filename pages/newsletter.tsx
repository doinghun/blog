import Container from 'components/Container';
import Subscribe from 'components/Subscribe';

export default function Newsletter() {
  return (
    <Container
      title="Newsletter – Dohun Kim"
      description="Thoughts on the software industry, programming, tech, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Newsletter
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">WIP</p>
        {/* <Subscribe /> */}
      </div>
    </Container>
  );
}
