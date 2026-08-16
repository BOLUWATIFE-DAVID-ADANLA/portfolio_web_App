import React from 'react';

const stack = [
  "Java", "Spring Boot", "LangChain", "RAG", "MCP", "n8n",
  "PostgreSQL", "Redis", "MongoDB", "Kafka", "RabbitMQ",
  "Docker", "AWS", "Dart", "Flutter", "React Native",
  "TypeScript", "JavaScript", "Next.js", "Node.js",
  "REST APIs", "JWT", "SAP ERP", "GoHighLevel", "Git/CI-CD",
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
