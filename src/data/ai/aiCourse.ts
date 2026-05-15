export interface AILesson {
  id: string;
  title: string;
  duration: string;
  concepts: string[];
  visualization?: string;
}

export interface AIProject {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  skills: string[];
  estimatedTime: string;
}

export interface AIModule {
  id: string;
  num: string;
  icon: string;
  title: string;
  level: 'Foundation' | 'Intermediate' | 'Advanced' | 'Expert';
  color: string;
  hoverColor: string;
  description: string;
  prerequisites: string[];
  learningObjectives: string[];
  tags: string;
  totalLessons: number;
  estimatedHours: number;
  lessons: AILesson[];
  projects: AIProject[];
  resources: {
    papers: string[];
    tutorials: string[];
    tools: string[];
  };
}

export const AI_MODULES: AIModule[] = [
  {
    id: 'llm-fundamentals',
    num: '01',
    icon: '🤖',
    title: 'LLM FUNDAMENTALS',
    level: 'Foundation',
    color: 'var(--neon)',
    hoverColor: '#00ff88',
    description: 'Deep dive into how Large Language Models work. Master the transformer architecture, attention mechanisms, tokenization, and the complete training pipeline.',
    prerequisites: ['Python basics', 'Linear algebra fundamentals', 'Basic neural networks'],
    learningObjectives: [
      'Understand transformer architecture from scratch',
      'Implement attention mechanisms',
      'Build a mini GPT from ground up',
      'Master tokenization techniques (BPE, WordPiece)',
      'Understand training dynamics and scaling laws',
      'Learn position encodings and embeddings'
    ],
    tags: 'Transformers • Attention • Tokenization • Training',
    totalLessons: 15,
    estimatedHours: 40,
    lessons: [
      {
        id: 'llm-101',
        title: 'Introduction to Language Models',
        duration: '2 hours',
        concepts: ['N-gram models', 'RNNs vs Transformers', 'Why transformers won', 'Model architectures comparison']
      },
      {
        id: 'transformer-arch',
        title: 'Transformer Architecture Deep Dive',
        duration: '4 hours',
        concepts: ['Encoder-decoder structure', 'Multi-head attention', 'Feed-forward networks', 'Layer normalization', 'Residual connections']
      },
      {
        id: 'attention-mechanism',
        title: 'Attention Mechanisms Explained',
        duration: '3 hours',
        concepts: ['Self-attention', 'Cross-attention', 'Scaled dot-product', 'Query, Key, Value matrices', 'Attention visualization']
      },
      {
        id: 'tokenization',
        title: 'Tokenization Strategies',
        duration: '2 hours',
        concepts: ['BPE (Byte-Pair Encoding)', 'WordPiece', 'SentencePiece', 'Character vs subword', 'Vocabulary building']
      },
      {
        id: 'position-encoding',
        title: 'Position Encodings',
        duration: '2 hours',
        concepts: ['Sinusoidal encoding', 'Learned positional embeddings', 'Rotary embeddings (RoPE)', 'ALiBi']
      },
      {
        id: 'training-pipeline',
        title: 'Training LLMs: The Complete Pipeline',
        duration: '5 hours',
        concepts: ['Pre-training objectives', 'Next token prediction', 'Masked language modeling', 'Loss functions', 'Optimization strategies']
      },
      {
        id: 'scaling-laws',
        title: 'Scaling Laws and Model Size',
        duration: '2 hours',
        concepts: ['Chinchilla scaling laws', 'Compute-optimal training', 'Data requirements', 'Parameter count vs performance']
      },
      {
        id: 'gpt-vs-bert',
        title: 'GPT vs BERT: Architecture Comparison',
        duration: '3 hours',
        concepts: ['Decoder-only (GPT)', 'Encoder-only (BERT)', 'Encoder-decoder (T5)', 'Use case differences', 'Bidirectional vs causal']
      },
      {
        id: 'context-windows',
        title: 'Context Windows and Memory',
        duration: '2 hours',
        concepts: ['Context length limitations', 'Extending context (LongFormer, BigBird)', 'Memory mechanisms', 'Efficient attention']
      },
      {
        id: 'inference-optimization',
        title: 'Inference Optimization',
        duration: '3 hours',
        concepts: ['KV caching', 'Quantization (INT8, INT4)', 'Model pruning', 'Speculative decoding', 'Flash Attention']
      },
      {
        id: 'mini-gpt',
        title: 'Building Mini-GPT from Scratch',
        duration: '6 hours',
        concepts: ['PyTorch implementation', 'Training on small corpus', 'Text generation', 'Evaluation metrics']
      },
      {
        id: 'llm-architectures',
        title: 'Modern LLM Architectures',
        duration: '3 hours',
        concepts: ['GPT-3/4 architecture', 'LLaMA', 'Mistral', 'Claude architecture insights', 'Mixture of Experts']
      },
      {
        id: 'emergent-abilities',
        title: 'Emergent Abilities in LLMs',
        duration: '2 hours',
        concepts: ['Chain-of-thought reasoning', 'In-context learning', 'Few-shot capabilities', 'Instruction following']
      }
    ],
    projects: [
      {
        id: 'mini-transformer',
        title: 'Build a Transformer from Scratch',
        difficulty: 'Intermediate',
        description: 'Implement a complete transformer architecture in PyTorch without using pre-built modules. Train it on a small text corpus.',
        skills: ['PyTorch', 'Neural networks', 'Python'],
        estimatedTime: '10-15 hours'
      },
      {
        id: 'tokenizer-impl',
        title: 'Custom BPE Tokenizer',
        difficulty: 'Beginner',
        description: 'Build a Byte-Pair Encoding tokenizer from scratch. Test it on multiple languages and compare with existing tokenizers.',
        skills: ['Python', 'Text processing', 'Algorithms'],
        estimatedTime: '5-8 hours'
      },
      {
        id: 'mini-gpt-project',
        title: 'Train Your Own Mini-GPT',
        difficulty: 'Advanced',
        description: 'Train a small GPT model (10M-100M parameters) on a specific domain (code, poetry, etc). Implement sampling strategies and evaluate quality.',
        skills: ['PyTorch', 'Training', 'GPU optimization'],
        estimatedTime: '20-30 hours'
      }
    ],
    resources: {
      papers: [
        'Attention Is All You Need (Vaswani et al., 2017)',
        'GPT-3: Language Models are Few-Shot Learners',
        'BERT: Pre-training of Deep Bidirectional Transformers',
        'Training Compute-Optimal LLMs (Chinchilla)',
        'LLaMA: Open and Efficient Foundation Language Models'
      ],
      tutorials: [
        'The Illustrated Transformer (Jay Alammar)',
        'nanoGPT by Andrej Karpathy',
        'Hugging Face Transformers Course',
        'Stanford CS224N: NLP with Deep Learning'
      ],
      tools: [
        'PyTorch / TensorFlow',
        'Hugging Face Transformers',
        'tiktoken (OpenAI tokenizer)',
        'SentencePiece',
        'Weights & Biases for tracking'
      ]
    }
  },
  {
    id: 'prompt-engineering',
    num: '02',
    icon: '📝',
    title: 'PROMPT ENGINEERING',
    level: 'Foundation',
    color: 'var(--neon2)',
    hoverColor: '#00cfff',
    description: 'Master the art and science of prompt engineering. Learn to craft prompts that consistently produce high-quality outputs across different models and tasks.',
    prerequisites: ['Basic LLM understanding', 'API experience'],
    learningObjectives: [
      'Design effective zero-shot prompts',
      'Implement few-shot learning patterns',
      'Master chain-of-thought prompting',
      'Optimize temperature and sampling parameters',
      'Build prompt templates and libraries',
      'Understand prompt injection and security'
    ],
    tags: 'CoT • Few-Shot • System Prompts • Temperature',
    totalLessons: 12,
    estimatedHours: 30,
    lessons: [
      {
        id: 'prompt-basics',
        title: 'Prompt Engineering Fundamentals',
        duration: '2 hours',
        concepts: ['What is prompting', 'Zero-shot vs few-shot', 'Instruction design', 'Context setting']
      },
      {
        id: 'zero-shot',
        title: 'Zero-Shot Prompting Mastery',
        duration: '2 hours',
        concepts: ['Clear instructions', 'Role prompting', 'Format specification', 'Common patterns']
      },
      {
        id: 'few-shot',
        title: 'Few-Shot Learning Techniques',
        duration: '3 hours',
        concepts: ['Example selection', 'Ordering effects', 'Diverse examples', 'Example quality']
      },
      {
        id: 'chain-of-thought',
        title: 'Chain-of-Thought (CoT) Reasoning',
        duration: '3 hours',
        concepts: ['Step-by-step reasoning', 'Let\'s think step by step', 'Self-consistency', 'Tree of Thoughts']
      },
      {
        id: 'system-prompts',
        title: 'System Prompts and Roles',
        duration: '2 hours',
        concepts: ['System vs user messages', 'Role definition', 'Persona design', 'Constraints']
      },
      {
        id: 'temperature-params',
        title: 'Temperature and Sampling Parameters',
        duration: '2 hours',
        concepts: ['Temperature control', 'Top-p (nucleus sampling)', 'Top-k sampling', 'Frequency/presence penalties']
      },
      {
        id: 'prompt-templates',
        title: 'Building Prompt Templates',
        duration: '2 hours',
        concepts: ['Template design', 'Variable substitution', 'Reusable patterns', 'Version control']
      },
      {
        id: 'advanced-techniques',
        title: 'Advanced Prompting Techniques',
        duration: '3 hours',
        concepts: ['Self-critique', 'Constitutional AI prompting', 'Debate prompting', 'Prompt chaining']
      },
      {
        id: 'prompt-optimization',
        title: 'Optimizing Prompts for Quality',
        duration: '2 hours',
        concepts: ['A/B testing prompts', 'Evaluation metrics', 'Iterative refinement', 'Prompt versioning']
      },
      {
        id: 'prompt-security',
        title: 'Prompt Injection and Security',
        duration: '3 hours',
        concepts: ['Prompt injection attacks', 'Jailbreaking', 'Defense strategies', 'Input sanitization']
      },
      {
        id: 'multimodal-prompts',
        title: 'Multimodal Prompting',
        duration: '2 hours',
        concepts: ['Image + text prompts', 'Vision-language models', 'Audio prompting', 'Video understanding']
      },
      {
        id: 'prompt-libraries',
        title: 'Building Prompt Libraries',
        duration: '2 hours',
        concepts: ['Organization strategies', 'Sharing prompts', 'Community patterns', 'LangChain prompts']
      }
    ],
    projects: [
      {
        id: 'prompt-optimizer',
        title: 'Automated Prompt Optimizer',
        difficulty: 'Intermediate',
        description: 'Build a tool that automatically tests and optimizes prompts using A/B testing and evaluation metrics.',
        skills: ['Python', 'OpenAI API', 'Testing'],
        estimatedTime: '8-12 hours'
      },
      {
        id: 'prompt-injection-defense',
        title: 'Prompt Injection Defense System',
        difficulty: 'Advanced',
        description: 'Create a system that detects and prevents prompt injection attacks using multiple defense layers.',
        skills: ['Security', 'NLP', 'Python'],
        estimatedTime: '15-20 hours'
      },
      {
        id: 'cot-solver',
        title: 'Chain-of-Thought Problem Solver',
        difficulty: 'Intermediate',
        description: 'Build an application that solves complex problems using chain-of-thought reasoning and self-consistency.',
        skills: ['LLM APIs', 'Prompt engineering', 'Logic'],
        estimatedTime: '10-15 hours'
      }
    ],
    resources: {
      papers: [
        'Chain-of-Thought Prompting Elicits Reasoning',
        'Self-Consistency Improves Chain of Thought',
        'Tree of Thoughts: Deliberate Problem Solving',
        'Prompt Injection: Parameterization of Fixed Inputs'
      ],
      tutorials: [
        'OpenAI Prompt Engineering Guide',
        'Anthropic Prompt Engineering',
        'Learn Prompting (learnprompting.org)',
        'Prompt Engineering Guide by DAIR.AI'
      ],
      tools: [
        'OpenAI Playground',
        'Anthropic Console',
        'PromptPerfect',
        'LangChain',
        'Guidance (Microsoft)'
      ]
    }
  },
  {
    id: 'rag',
    num: '03',
    icon: '📚',
    title: 'RAG (RETRIEVAL AUGMENTED GENERATION)',
    level: 'Intermediate',
    color: '#a78bfa',
    hoverColor: '#a78bfa',
    description: 'Build production-grade RAG systems. Master document chunking, semantic search, reranking, and combining LLMs with external knowledge bases.',
    prerequisites: ['LLM fundamentals', 'Vector embeddings', 'Basic databases'],
    learningObjectives: [
      'Design optimal chunking strategies',
      'Implement semantic search systems',
      'Build multi-stage retrieval pipelines',
      'Master reranking techniques',
      'Handle context length limitations',
      'Optimize retrieval quality and speed'
    ],
    tags: 'Document Chunking • Retrieval • Reranking • Context',
    totalLessons: 14,
    estimatedHours: 35,
    lessons: [
      {
        id: 'rag-intro',
        title: 'RAG Fundamentals',
        duration: '2 hours',
        concepts: ['What is RAG', 'Why RAG over fine-tuning', 'RAG architecture', 'Use cases']
      },
      {
        id: 'document-loading',
        title: 'Document Loading and Preprocessing',
        duration: '2 hours',
        concepts: ['PDF parsing', 'HTML extraction', 'OCR for images', 'Markdown handling', 'Cleaning text']
      },
      {
        id: 'chunking-strategies',
        title: 'Document Chunking Strategies',
        duration: '3 hours',
        concepts: ['Fixed-size chunking', 'Semantic chunking', 'Recursive splitting', 'Overlap strategies', 'Metadata preservation']
      },
      {
        id: 'embedding-generation',
        title: 'Generating Embeddings',
        duration: '2 hours',
        concepts: ['OpenAI embeddings', 'Sentence transformers', 'Cohere embeddings', 'Batch processing', 'Caching strategies']
      },
      {
        id: 'vector-storage',
        title: 'Storing Vectors Efficiently',
        duration: '2 hours',
        concepts: ['Vector database selection', 'Indexing strategies', 'Metadata filtering', 'Hybrid search']
      },
      {
        id: 'retrieval-methods',
        title: 'Retrieval Methods',
        duration: '3 hours',
        concepts: ['Similarity search', 'MMR (Maximal Marginal Relevance)', 'Hybrid search (dense + sparse)', 'Query expansion']
      },
      {
        id: 'reranking',
        title: 'Reranking for Quality',
        duration: '3 hours',
        concepts: ['Cross-encoder reranking', 'Cohere rerank', 'Custom scoring', 'Two-stage retrieval']
      },
      {
        id: 'context-compression',
        title: 'Context Compression',
        duration: '2 hours',
        concepts: ['Token optimization', 'Irrelevant content removal', 'Summary-based compression', 'LongLLMLingua']
      },
      {
        id: 'query-understanding',
        title: 'Query Understanding and Routing',
        duration: '2 hours',
        concepts: ['Query classification', 'Intent detection', 'Multi-query generation', 'Query rewriting']
      },
      {
        id: 'multi-doc-rag',
        title: 'Multi-Document RAG',
        duration: '3 hours',
        concepts: ['Cross-document synthesis', 'Citation generation', 'Source tracking', 'Conflicting information']
      },
      {
        id: 'rag-evaluation',
        title: 'Evaluating RAG Systems',
        duration: '3 hours',
        concepts: ['Retrieval metrics (MRR, NDCG)', 'Generation quality', 'Faithfulness scoring', 'RAGAS framework']
      },
      {
        id: 'advanced-rag',
        title: 'Advanced RAG Patterns',
        duration: '3 hours',
        concepts: ['Hierarchical RAG', 'Graph RAG', 'Agentic RAG', 'Self-RAG']
      },
      {
        id: 'rag-production',
        title: 'Production RAG Systems',
        duration: '3 hours',
        concepts: ['Caching strategies', 'Rate limiting', 'Monitoring', 'Cost optimization', 'Failure handling']
      }
    ],
    projects: [
      {
        id: 'doc-qa-system',
        title: 'Document Q&A System',
        difficulty: 'Intermediate',
        description: 'Build a complete RAG system that can answer questions from uploaded documents with citations.',
        skills: ['RAG', 'Vector DBs', 'LLMs', 'Web dev'],
        estimatedTime: '20-30 hours'
      },
      {
        id: 'rag-optimizer',
        title: 'RAG Pipeline Optimizer',
        difficulty: 'Advanced',
        description: 'Create a tool that automatically tunes chunking, retrieval, and generation parameters for optimal performance.',
        skills: ['ML optimization', 'RAG', 'Evaluation'],
        estimatedTime: '25-35 hours'
      },
      {
        id: 'multi-source-rag',
        title: 'Multi-Source Knowledge Base',
        difficulty: 'Advanced',
        description: 'Build a RAG system that retrieves from multiple sources (docs, APIs, databases) and synthesizes answers.',
        skills: ['RAG', 'APIs', 'System design'],
        estimatedTime: '30-40 hours'
      }
    ],
    resources: {
      papers: [
        'RAG: Retrieval-Augmented Generation',
        'Dense Passage Retrieval for Open-Domain QA',
        'REPLUG: Retrieval-Augmented Black-Box LMs',
        'Self-RAG: Learning to Retrieve, Generate, and Critique'
      ],
      tutorials: [
        'LangChain RAG Tutorial',
        'LlamaIndex RAG Guide',
        'Pinecone RAG Handbook',
        'Full Stack LLM Bootcamp (RAG section)'
      ],
      tools: [
        'LangChain',
        'LlamaIndex',
        'Haystack',
        'Unstructured.io',
        'RAGAS (evaluation)'
      ]
    }
  }
  // ... More modules will be added
];

export const AI_LEARNING_PATH = [
  {
    phase: 'Phase 1: Foundations',
    duration: '4-6 weeks',
    modules: ['llm-fundamentals', 'prompt-engineering'],
    goal: 'Understand how LLMs work and how to interact with them effectively'
  },
  {
    phase: 'Phase 2: Applied AI',
    duration: '6-8 weeks',
    modules: ['rag', 'vector-databases', 'embeddings'],
    goal: 'Build production AI applications with external knowledge'
  },
  {
    phase: 'Phase 3: Advanced Patterns',
    duration: '6-8 weeks',
    modules: ['ai-agents', 'mcp', 'a2a'],
    goal: 'Create autonomous AI systems and multi-agent architectures'
  },
  {
    phase: 'Phase 4: Specialization',
    duration: '8-10 weeks',
    modules: ['fine-tuning', 'multimodal-ai', 'ai-safety'],
    goal: 'Specialize in model training, multimodal systems, or safety'
  }
];
