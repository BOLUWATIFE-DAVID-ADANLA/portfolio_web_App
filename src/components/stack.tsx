import React from 'react';

const stack = [
  "Java", "Spring Boot", "LangChain", "RAG", "MCP", "PostgreSQL", "Redis",
  "Docker", "AWS", "Dart", "Flutter", "React Native", "TypeScript",
  "Next.js", "Node.js", "MongoDB", "Kafka", "RabbitMQ",
];

const Stack = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-sm text-foreground">Stack</h2>
      <p className="text-sm text-muted leading-relaxed">
        {stack.join(" · ")}
      </p>
    </section>
  );
};

export default Stack;
