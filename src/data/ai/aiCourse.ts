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
  },
  {
    id: 'vector-databases',
    num: '04',
    icon: '🗄️',
    title: 'VECTOR DATABASES',
    level: 'Intermediate',
    color: 'var(--neon4)',
    hoverColor: '#ffd600',
    description: 'Master vector databases for semantic search at scale. Learn ANN algorithms, indexing strategies, and production deployment.',
    prerequisites: ['Embeddings basics', 'Similarity metrics', 'Database fundamentals'],
    learningObjectives: [
      'Understand vector database architecture',
      'Implement ANN algorithms (HNSW, IVF)',
      'Design efficient indexing strategies',
      'Build production vector search systems',
      'Optimize query performance',
      'Handle metadata filtering and hybrid search'
    ],
    tags: 'ANN • Cosine Similarity • HNSW • Indexing',
    totalLessons: 12,
    estimatedHours: 28,
    lessons: [
      {
        id: 'vectordb-intro',
        title: 'Vector Database Fundamentals',
        duration: '2 hours',
        concepts: ['What are vector databases', 'Use cases', 'Vector vs traditional DBs', 'When to use vector search']
      },
      {
        id: 'similarity-metrics',
        title: 'Similarity Metrics Deep Dive',
        duration: '2 hours',
        concepts: ['Cosine similarity', 'Euclidean distance', 'Dot product', 'Manhattan distance', 'Metric selection']
      },
      {
        id: 'ann-algorithms',
        title: 'Approximate Nearest Neighbors (ANN)',
        duration: '3 hours',
        concepts: ['KNN vs ANN', 'Trade-offs (speed vs accuracy)', 'HNSW algorithm', 'IVF (Inverted File Index)', 'Product Quantization']
      },
      {
        id: 'hnsw-deep',
        title: 'HNSW (Hierarchical NSW) Algorithm',
        duration: '3 hours',
        concepts: ['Graph-based search', 'Multi-layer structure', 'Construction algorithm', 'Search algorithm', 'Parameter tuning']
      },
      {
        id: 'indexing-strategies',
        title: 'Indexing Strategies',
        duration: '2 hours',
        concepts: ['Flat index', 'IVF index', 'HNSW index', 'Scalar quantization', 'Index building trade-offs']
      },
      {
        id: 'metadata-filtering',
        title: 'Metadata Filtering',
        duration: '2 hours',
        concepts: ['Pre-filtering vs post-filtering', 'Hybrid search', 'Structured data + vectors', 'Filter performance']
      },
      {
        id: 'pinecone',
        title: 'Pinecone Deep Dive',
        duration: '2 hours',
        concepts: ['Pinecone architecture', 'Namespaces', 'Metadata filtering', 'Sparse-dense hybrid', 'Production best practices']
      },
      {
        id: 'weaviate',
        title: 'Weaviate & Graph Capabilities',
        duration: '2 hours',
        concepts: ['Weaviate schema', 'GraphQL queries', 'Cross-references', 'Modules & vectorizers', 'Generative search']
      },
      {
        id: 'chroma-faiss',
        title: 'Chroma, FAISS, and Open Source Options',
        duration: '2 hours',
        concepts: ['Chroma for local dev', 'FAISS library', 'Milvus', 'Qdrant', 'Self-hosting considerations']
      },
      {
        id: 'query-optimization',
        title: 'Query Performance Optimization',
        duration: '3 hours',
        concepts: ['Query latency', 'Batch queries', 'Caching strategies', 'Index warmup', 'Monitoring & profiling']
      },
      {
        id: 'hybrid-search',
        title: 'Hybrid Search (Dense + Sparse)',
        duration: '2 hours',
        concepts: ['BM25 + vector search', 'Reciprocal rank fusion', 'Score normalization', 'When to use hybrid']
      },
      {
        id: 'vectordb-production',
        title: 'Production Vector Databases',
        duration: '3 hours',
        concepts: ['Scaling strategies', 'Sharding', 'Replication', 'Disaster recovery', 'Cost optimization', 'Monitoring']
      }
    ],
    projects: [
      {
        id: 'semantic-search-engine',
        title: 'Semantic Search Engine',
        difficulty: 'Intermediate',
        description: 'Build a semantic search engine with vector database backend. Support metadata filtering and hybrid search.',
        skills: ['Vector DBs', 'Embeddings', 'Search algorithms'],
        estimatedTime: '15-20 hours'
      },
      {
        id: 'vectordb-benchmark',
        title: 'Vector Database Benchmark Suite',
        difficulty: 'Advanced',
        description: 'Create a comprehensive benchmark comparing Pinecone, Weaviate, Chroma on various workloads.',
        skills: ['Performance testing', 'Data analysis', 'Multiple vector DBs'],
        estimatedTime: '20-25 hours'
      }
    ],
    resources: {
      papers: [
        'Efficient and Robust Approximate Nearest Neighbor Search',
        'Product Quantization for Nearest Neighbor Search',
        'Billion-Scale Similarity Search with GPUs'
      ],
      tutorials: [
        'Pinecone Learning Center',
        'Weaviate Academy',
        'FAISS Documentation (Facebook AI)',
        'Vector Database Fundamentals (YouTube)'
      ],
      tools: [
        'Pinecone',
        'Weaviate',
        'Chroma',
        'FAISS',
        'Qdrant',
        'Milvus'
      ]
    }
  },
  {
    id: 'embeddings',
    num: '05',
    icon: '🔢',
    title: 'EMBEDDINGS & SEMANTIC SEARCH',
    level: 'Intermediate',
    color: 'var(--neon)',
    hoverColor: '#00ff88',
    description: 'Master embeddings - the foundation of modern AI. Learn to convert text, code, and images into vectors for semantic understanding.',
    prerequisites: ['Linear algebra', 'Basic NLP', 'Python'],
    learningObjectives: [
      'Understand embedding spaces',
      'Generate embeddings with various models',
      'Implement semantic similarity',
      'Build clustering and classification systems',
      'Fine-tune embedding models',
      'Handle multilingual embeddings'
    ],
    tags: 'Text2Vec • SBERT • Similarity • Clustering',
    totalLessons: 11,
    estimatedHours: 25,
    lessons: [
      {
        id: 'embedding-basics',
        title: 'What are Embeddings?',
        duration: '2 hours',
        concepts: ['Vector representations', 'Semantic meaning', 'Embedding spaces', 'Dimensionality', 'Why embeddings work']
      },
      {
        id: 'word-embeddings',
        title: 'Word Embeddings (Word2Vec, GloVe)',
        duration: '2 hours',
        concepts: ['Word2Vec (CBOW, Skip-gram)', 'GloVe', 'FastText', 'Limitations of word embeddings']
      },
      {
        id: 'sentence-embeddings',
        title: 'Sentence Embeddings',
        duration: '3 hours',
        concepts: ['Sentence-BERT (SBERT)', 'Universal Sentence Encoder', 'Pooling strategies', 'Contextual embeddings']
      },
      {
        id: 'openai-embeddings',
        title: 'OpenAI Embeddings',
        duration: '2 hours',
        concepts: ['text-embedding-3-small/large', 'API usage', 'Dimensions', 'Cost optimization', 'Batch processing']
      },
      {
        id: 'similarity-search',
        title: 'Semantic Similarity',
        duration: '2 hours',
        concepts: ['Computing similarity', 'Similarity thresholds', 'Ranking results', 'Duplicate detection']
      },
      {
        id: 'clustering',
        title: 'Clustering with Embeddings',
        duration: '2 hours',
        concepts: ['K-means clustering', 'DBSCAN', 'Hierarchical clustering', 'Topic modeling', 'Visualization (t-SNE, UMAP)']
      },
      {
        id: 'classification',
        title: 'Classification with Embeddings',
        duration: '2 hours',
        concepts: ['Few-shot classification', 'Zero-shot classification', 'Embedding + classifier', 'Intent detection']
      },
      {
        id: 'multilingual',
        title: 'Multilingual Embeddings',
        duration: '2 hours',
        concepts: ['Language-agnostic embeddings', 'Cross-lingual search', 'Translation without translation', 'mBERT, XLM-R']
      },
      {
        id: 'code-embeddings',
        title: 'Code Embeddings',
        duration: '2 hours',
        concepts: ['CodeBERT', 'Code similarity', 'Code search', 'Bug detection', 'Code generation']
      },
      {
        id: 'fine-tuning-embeddings',
        title: 'Fine-Tuning Embedding Models',
        duration: '3 hours',
        concepts: ['Domain adaptation', 'Contrastive learning', 'Triplet loss', 'Training data creation', 'Evaluation']
      },
      {
        id: 'embedding-production',
        title: 'Production Embeddings',
        duration: '3 hours',
        concepts: ['Caching embeddings', 'Batch processing', 'Model updates', 'Monitoring drift', 'Cost optimization']
      }
    ],
    projects: [
      {
        id: 'semantic-search-app',
        title: 'Semantic Search Application',
        difficulty: 'Intermediate',
        description: 'Build a semantic search app that understands intent, not just keywords. Include clustering and visualization.',
        skills: ['Embeddings', 'Search', 'Visualization'],
        estimatedTime: '12-18 hours'
      },
      {
        id: 'custom-embedding-model',
        title: 'Domain-Specific Embedding Model',
        difficulty: 'Advanced',
        description: 'Fine-tune an embedding model on domain-specific data (legal, medical, code) and evaluate improvements.',
        skills: ['Model fine-tuning', 'Training', 'Evaluation'],
        estimatedTime: '25-30 hours'
      }
    ],
    resources: {
      papers: [
        'Sentence-BERT: Sentence Embeddings using Siamese BERT',
        'Text and Code Embeddings by Contrastive Pre-Training',
        'Learning Transferable Visual Models From Natural Language Supervision (CLIP)'
      ],
      tutorials: [
        'Sentence Transformers Documentation',
        'OpenAI Embeddings Guide',
        'Cohere Embeddings Tutorial',
        'Pinecone Embeddings Course'
      ],
      tools: [
        'Sentence Transformers',
        'OpenAI API',
        'Cohere API',
        'Hugging Face Transformers',
        'UMAP/t-SNE for visualization'
      ]
    }
  },
  {
    id: 'mcp',
    num: '06',
    icon: '🤝',
    title: 'MCP (MODEL CONTEXT PROTOCOL)',
    level: 'Advanced',
    color: 'var(--neon2)',
    hoverColor: '#00cfff',
    description: 'Master Anthropic\'s Model Context Protocol. Connect AI models to external data sources, tools, and systems.',
    prerequisites: ['APIs', 'JSON', 'Basic networking', 'Claude API'],
    learningObjectives: [
      'Understand MCP architecture',
      'Build MCP servers',
      'Implement resources and tools',
      'Handle authentication and security',
      'Deploy production MCP integrations',
      'Debug MCP connections'
    ],
    tags: 'Protocol Design • Tool Use • Integration • Resources',
    totalLessons: 10,
    estimatedHours: 22,
    lessons: [
      {
        id: 'mcp-intro',
        title: 'Introduction to MCP',
        duration: '2 hours',
        concepts: ['What is MCP', 'Why MCP exists', 'MCP vs function calling', 'Protocol overview', 'Use cases']
      },
      {
        id: 'mcp-architecture',
        title: 'MCP Architecture',
        duration: '2 hours',
        concepts: ['Client-server model', 'Protocol messages', 'Transport layer', 'Lifecycle management', 'Error handling']
      },
      {
        id: 'mcp-servers',
        title: 'Building MCP Servers',
        duration: '3 hours',
        concepts: ['Server implementation', 'Server capabilities', 'Configuration', 'Testing servers', 'TypeScript/Python SDKs']
      },
      {
        id: 'mcp-resources',
        title: 'MCP Resources',
        duration: '2 hours',
        concepts: ['Resource types', 'Resource URIs', 'Templates', 'Subscriptions', 'Resource updates']
      },
      {
        id: 'mcp-tools',
        title: 'MCP Tools',
        duration: '3 hours',
        concepts: ['Tool definitions', 'Input schemas', 'Tool execution', 'Error handling', 'Best practices']
      },
      {
        id: 'mcp-prompts',
        title: 'MCP Prompts',
        duration: '2 hours',
        concepts: ['Prompt templates', 'Arguments', 'Dynamic prompts', 'Prompt discovery']
      },
      {
        id: 'mcp-sampling',
        title: 'MCP Sampling',
        duration: '2 hours',
        concepts: ['Sampling requests', 'Model selection', 'Parameter configuration', 'Response handling']
      },
      {
        id: 'mcp-security',
        title: 'MCP Security',
        duration: '2 hours',
        concepts: ['Authentication', 'Authorization', 'Rate limiting', 'Input validation', 'Sandboxing']
      },
      {
        id: 'mcp-integration',
        title: 'MCP Integration Patterns',
        duration: '2 hours',
        concepts: ['Database connections', 'API integrations', 'File systems', 'Cloud services', 'Custom tools']
      },
      {
        id: 'mcp-production',
        title: 'Production MCP Deployment',
        duration: '2 hours',
        concepts: ['Server hosting', 'Monitoring', 'Logging', 'Versioning', 'Documentation']
      }
    ],
    projects: [
      {
        id: 'mcp-database-server',
        title: 'MCP Database Integration Server',
        difficulty: 'Intermediate',
        description: 'Build an MCP server that connects Claude to a database. Support queries, schema inspection, and data updates.',
        skills: ['MCP', 'Databases', 'APIs'],
        estimatedTime: '15-20 hours'
      },
      {
        id: 'mcp-custom-tools',
        title: 'Custom MCP Tools Suite',
        difficulty: 'Advanced',
        description: 'Create a suite of custom MCP tools for your domain (analytics, CRM, internal APIs).',
        skills: ['MCP', 'Tool design', 'Integration'],
        estimatedTime: '20-30 hours'
      }
    ],
    resources: {
      papers: [],
      tutorials: [
        'MCP Official Documentation',
        'MCP TypeScript SDK',
        'MCP Python SDK',
        'Building Your First MCP Server'
      ],
      tools: [
        'MCP TypeScript SDK',
        'MCP Python SDK',
        'Claude Desktop (MCP client)',
        'MCP Inspector (debugging)'
      ]
    }
  },
  {
    id: 'a2a',
    num: '07',
    icon: '🔄',
    title: 'A2A (AGENT-TO-AGENT)',
    level: 'Advanced',
    color: 'var(--neon3)',
    hoverColor: '#ff4d6d',
    description: 'Build multi-agent systems where AI agents communicate, collaborate, and coordinate. Master swarm intelligence.',
    prerequisites: ['AI agents', 'Async programming', 'Message queues', 'System design'],
    learningObjectives: [
      'Design multi-agent architectures',
      'Implement agent communication protocols',
      'Build coordination mechanisms',
      'Handle agent failures and recovery',
      'Optimize agent collaboration',
      'Scale multi-agent systems'
    ],
    tags: 'Multi-Agent • Communication • Coordination • Swarm',
    totalLessons: 11,
    estimatedHours: 26,
    lessons: [
      {
        id: 'a2a-intro',
        title: 'Multi-Agent Systems Fundamentals',
        duration: '2 hours',
        concepts: ['What are multi-agent systems', 'Agent cooperation', 'Agent competition', 'Emergent behavior', 'Use cases']
      },
      {
        id: 'agent-communication',
        title: 'Agent Communication Protocols',
        duration: '3 hours',
        concepts: ['Message passing', 'Communication languages (ACL)', 'Protocol design', 'Synchronous vs asynchronous', 'Message formats']
      },
      {
        id: 'coordination-mechanisms',
        title: 'Coordination Mechanisms',
        duration: '3 hours',
        concepts: ['Task allocation', 'Resource sharing', 'Conflict resolution', 'Voting mechanisms', 'Consensus algorithms']
      },
      {
        id: 'agent-roles',
        title: 'Agent Roles and Hierarchies',
        duration: '2 hours',
        concepts: ['Specialist agents', 'Manager agents', 'Worker agents', 'Hierarchical structures', 'Flat organizations']
      },
      {
        id: 'swarm-intelligence',
        title: 'Swarm Intelligence',
        duration: '2 hours',
        concepts: ['Ant colony optimization', 'Particle swarm', 'Boid algorithms', 'Collective intelligence', 'Self-organization']
      },
      {
        id: 'negotiation',
        title: 'Agent Negotiation',
        duration: '2 hours',
        concepts: ['Bargaining strategies', 'Auction mechanisms', 'Game theory', 'Nash equilibrium', 'Cooperative vs competitive']
      },
      {
        id: 'task-decomposition',
        title: 'Task Decomposition & Distribution',
        duration: '3 hours',
        concepts: ['Problem decomposition', 'Task dependency graphs', 'Parallel execution', 'Result aggregation', 'Load balancing']
      },
      {
        id: 'failure-handling',
        title: 'Fault Tolerance in Multi-Agent Systems',
        duration: '2 hours',
        concepts: ['Agent failures', 'Redundancy', 'Failover', 'Recovery strategies', 'Byzantine fault tolerance']
      },
      {
        id: 'multi-agent-learning',
        title: 'Multi-Agent Learning',
        duration: '3 hours',
        concepts: ['Reinforcement learning', 'Q-learning in multi-agent', 'Credit assignment', 'Cooperative learning', 'Opponent modeling']
      },
      {
        id: 'a2a-frameworks',
        title: 'Multi-Agent Frameworks',
        duration: '2 hours',
        concepts: ['AutoGPT multi-agent', 'CrewAI', 'MetaGPT', 'Custom frameworks', 'Framework comparison']
      },
      {
        id: 'a2a-production',
        title: 'Production Multi-Agent Systems',
        duration: '2 hours',
        concepts: ['Scaling agents', 'Monitoring', 'Debugging multi-agent', 'Cost management', 'Performance optimization']
      }
    ],
    projects: [
      {
        id: 'research-team-agents',
        title: 'Research Team Multi-Agent System',
        difficulty: 'Advanced',
        description: 'Build a team of specialized agents (researcher, critic, writer) that collaborate to produce research reports.',
        skills: ['Multi-agent', 'Coordination', 'LLMs'],
        estimatedTime: '25-35 hours'
      },
      {
        id: 'swarm-optimizer',
        title: 'Swarm Optimization System',
        difficulty: 'Expert',
        description: 'Implement a swarm intelligence system for optimization problems. Compare with traditional algorithms.',
        skills: ['Swarm intelligence', 'Optimization', 'Algorithms'],
        estimatedTime: '30-40 hours'
      }
    ],
    resources: {
      papers: [
        'Multi-Agent Reinforcement Learning: A Critical Survey',
        'Byzantine Generals Problem',
        'Particle Swarm Optimization',
        'Auction Theory for Multi-Agent Systems'
      ],
      tutorials: [
        'CrewAI Documentation',
        'MetaGPT Tutorial',
        'Multi-Agent Systems (Coursera)',
        'AutoGPT Architecture'
      ],
      tools: [
        'CrewAI',
        'MetaGPT',
        'LangGraph',
        'Ray (distributed computing)',
        'Message queues (RabbitMQ, Kafka)'
      ]
    }
  },
  {
    id: 'ai-agents',
    num: '08',
    icon: '⚡',
    title: 'AI AGENTS & WORKFLOWS',
    level: 'Advanced',
    color: '#a78bfa',
    hoverColor: '#a78bfa',
    description: 'Build autonomous AI agents that plan, act, and learn. Master ReAct, tool use, memory systems, and agentic workflows.',
    prerequisites: ['LLMs', 'Prompt engineering', 'APIs', 'Python/TypeScript'],
    learningObjectives: [
      'Understand agent architectures',
      'Implement ReAct pattern',
      'Build tool-using agents',
      'Design agent memory systems',
      'Create planning and reflection loops',
      'Deploy production agents'
    ],
    tags: 'ReAct • LangChain • Tools • Memory • Planning',
    totalLessons: 14,
    estimatedHours: 32,
    lessons: [
      {
        id: 'agent-intro',
        title: 'Introduction to AI Agents',
        duration: '2 hours',
        concepts: ['What is an AI agent', 'Agent vs chatbot', 'Autonomous behavior', 'Agent capabilities', 'Real-world applications']
      },
      {
        id: 'react-pattern',
        title: 'ReAct Pattern (Reason + Act)',
        duration: '3 hours',
        concepts: ['Reasoning traces', 'Action execution', 'Observation handling', 'Thought-action-observation loop', 'ReAct prompting']
      },
      {
        id: 'tool-use',
        title: 'Tool Use and Function Calling',
        duration: '3 hours',
        concepts: ['Tool definitions', 'Function calling API', 'Tool selection', 'Error handling', 'Tool chaining']
      },
      {
        id: 'agent-memory',
        title: 'Agent Memory Systems',
        duration: '3 hours',
        concepts: ['Short-term memory', 'Long-term memory', 'Episodic memory', 'Semantic memory', 'Memory retrieval', 'Vector memory']
      },
      {
        id: 'planning',
        title: 'Agent Planning',
        duration: '2 hours',
        concepts: ['Task decomposition', 'Multi-step planning', 'Plan validation', 'Dynamic replanning', 'Plan & Solve prompting']
      },
      {
        id: 'reflection',
        title: 'Reflection and Self-Critique',
        duration: '2 hours',
        concepts: ['Self-evaluation', 'Iterative refinement', 'Reflexion pattern', 'Learning from mistakes', 'Quality improvement']
      },
      {
        id: 'langchain-agents',
        title: 'LangChain Agents',
        duration: '3 hours',
        concepts: ['LangChain agent types', 'AgentExecutor', 'Custom agents', 'Callbacks', 'Debugging']
      },
      {
        id: 'langgraph',
        title: 'LangGraph for Complex Workflows',
        duration: '3 hours',
        concepts: ['State graphs', 'Nodes and edges', 'Conditional routing', 'Cycles and loops', 'Human-in-the-loop']
      },
      {
        id: 'autogpt-babygpt',
        title: 'AutoGPT and BabyAGI Patterns',
        duration: '2 hours',
        concepts: ['Autonomous task generation', 'Task prioritization', 'Result storage', 'Continuous learning', 'Limitations']
      },
      {
        id: 'agent-evaluation',
        title: 'Agent Evaluation',
        duration: '2 hours',
        concepts: ['Success metrics', 'Benchmarks (AgentBench)', 'Human evaluation', 'Automated testing', 'Failure analysis']
      },
      {
        id: 'agent-safety',
        title: 'Agent Safety and Constraints',
        duration: '2 hours',
        concepts: ['Action validation', 'Sandboxing', 'Budget limits', 'Human oversight', 'Kill switches']
      },
      {
        id: 'observability',
        title: 'Agent Observability',
        duration: '2 hours',
        concepts: ['Logging', 'Tracing', 'Metrics', 'Debugging tools', 'LangSmith', 'Weights & Biases']
      },
      {
        id: 'agent-orchestration',
        title: 'Agent Orchestration',
        duration: '2 hours',
        concepts: ['Sequential agents', 'Parallel agents', 'Hierarchical agents', 'Supervisor pattern', 'Router pattern']
      },
      {
        id: 'production-agents',
        title: 'Production Agent Deployment',
        duration: '3 hours',
        concepts: ['Hosting', 'Scaling', 'Cost management', 'Monitoring', 'Error recovery', 'Version management']
      }
    ],
    projects: [
      {
        id: 'research-agent',
        title: 'Autonomous Research Agent',
        difficulty: 'Intermediate',
        description: 'Build an agent that researches topics using web search, synthesizes information, and produces reports.',
        skills: ['Agents', 'ReAct', 'Tools', 'Memory'],
        estimatedTime: '20-25 hours'
      },
      {
        id: 'code-agent',
        title: 'Code Generation & Debugging Agent',
        difficulty: 'Advanced',
        description: 'Create an agent that writes code, runs tests, debugs failures, and iterates until tests pass.',
        skills: ['Agents', 'Code execution', 'Reflection', 'Testing'],
        estimatedTime: '30-40 hours'
      },
      {
        id: 'customer-service-agent',
        title: 'Customer Service Agent',
        difficulty: 'Advanced',
        description: 'Build a production-ready customer service agent with tools for order lookup, refunds, and escalation.',
        skills: ['Production agents', 'Tools', 'Safety', 'Monitoring'],
        estimatedTime: '35-45 hours'
      }
    ],
    resources: {
      papers: [
        'ReAct: Synergizing Reasoning and Acting in Language Models',
        'Reflexion: Language Agents with Verbal Reinforcement Learning',
        'Toolformer: Language Models Can Teach Themselves to Use Tools',
        'AutoGPT: An Autonomous GPT-4 Experiment'
      ],
      tutorials: [
        'LangChain Agents Documentation',
        'LangGraph Tutorial',
        'Building LLM Agents (DeepLearning.AI)',
        'Anthropic Agent Guide'
      ],
      tools: [
        'LangChain',
        'LangGraph',
        'LangSmith (observability)',
        'AutoGPT',
        'Semantic Kernel',
        'Haystack Agents'
      ]
    }
  },
  {
    id: 'fine-tuning',
    num: '09',
    icon: '🎯',
    title: 'FINE-TUNING & TRAINING',
    level: 'Expert',
    color: 'var(--neon4)',
    hoverColor: '#ffd600',
    description: 'Master model training and adaptation. Learn LoRA, QLoRA, RLHF, and instruction tuning to customize models for your needs.',
    prerequisites: ['Deep learning', 'PyTorch/TensorFlow', 'GPUs', 'Training basics'],
    learningObjectives: [
      'Understand fine-tuning vs pre-training',
      'Implement LoRA and QLoRA',
      'Perform supervised fine-tuning',
      'Apply RLHF for alignment',
      'Optimize training efficiency',
      'Evaluate fine-tuned models'
    ],
    tags: 'LoRA • QLoRA • RLHF • SFT • PEFT',
    totalLessons: 13,
    estimatedHours: 35,
    lessons: [
      {
        id: 'finetuning-intro',
        title: 'Fine-Tuning Fundamentals',
        duration: '2 hours',
        concepts: ['Pre-training vs fine-tuning', 'Transfer learning', 'When to fine-tune', 'Alternatives to fine-tuning', 'Cost-benefit analysis']
      },
      {
        id: 'sft',
        title: 'Supervised Fine-Tuning (SFT)',
        duration: '3 hours',
        concepts: ['Training data preparation', 'Input-output pairs', 'Loss functions', 'Hyperparameters', 'Overfitting prevention']
      },
      {
        id: 'instruction-tuning',
        title: 'Instruction Tuning',
        duration: '3 hours',
        concepts: ['Instruction datasets', 'Prompt-response pairs', 'Multi-task learning', 'Instruction following', 'FLAN, T0']
      },
      {
        id: 'lora',
        title: 'LoRA (Low-Rank Adaptation)',
        duration: '4 hours',
        concepts: ['Low-rank matrices', 'Parameter-efficient tuning', 'LoRA configuration', 'Rank selection', 'Merging adapters']
      },
      {
        id: 'qlora',
        title: 'QLoRA (Quantized LoRA)',
        duration: '3 hours',
        concepts: ['4-bit quantization', 'Memory optimization', 'QLoRA vs LoRA', 'Training on consumer GPUs', 'Quality trade-offs']
      },
      {
        id: 'peft',
        title: 'PEFT (Parameter-Efficient Fine-Tuning)',
        duration: '3 hours',
        concepts: ['Adapter layers', 'Prefix tuning', 'Prompt tuning', 'IA3', 'PEFT library (Hugging Face)']
      },
      {
        id: 'rlhf',
        title: 'RLHF (Reinforcement Learning from Human Feedback)',
        duration: '4 hours',
        concepts: ['Reward modeling', 'PPO (Proximal Policy Optimization)', 'Human preference data', 'KL divergence', 'RLHF pipeline']
      },
      {
        id: 'dpo',
        title: 'DPO (Direct Preference Optimization)',
        duration: '3 hours',
        concepts: ['DPO vs RLHF', 'Preference pairs', 'Simpler training', 'No reward model', 'When to use DPO']
      },
      {
        id: 'dataset-curation',
        title: 'Dataset Creation & Curation',
        duration: '3 hours',
        concepts: ['Data collection', 'Data quality', 'Synthetic data', 'Data augmentation', 'Filtering strategies']
      },
      {
        id: 'training-infrastructure',
        title: 'Training Infrastructure',
        duration: '2 hours',
        concepts: ['GPU selection', 'Distributed training', 'DeepSpeed', 'FSDP', 'Cloud vs on-prem']
      },
      {
        id: 'evaluation-ft',
        title: 'Evaluating Fine-Tuned Models',
        duration: '2 hours',
        concepts: ['Benchmark evaluation', 'Human evaluation', 'A/B testing', 'Regression detection', 'Continuous evaluation']
      },
      {
        id: 'deployment-ft',
        title: 'Deploying Fine-Tuned Models',
        duration: '2 hours',
        concepts: ['Model serving', 'Inference optimization', 'Version management', 'Monitoring', 'Cost optimization']
      },
      {
        id: 'advanced-ft',
        title: 'Advanced Fine-Tuning Techniques',
        duration: '1 hour',
        concepts: ['Multi-task fine-tuning', 'Continual learning', 'Few-shot fine-tuning', 'Meta-learning', 'Mixture of experts']
      }
    ],
    projects: [
      {
        id: 'lora-finetuning',
        title: 'LoRA Fine-Tuning Project',
        difficulty: 'Advanced',
        description: 'Fine-tune a 7B model using LoRA on a custom dataset. Compare with base model performance.',
        skills: ['LoRA', 'Training', 'Evaluation', 'PyTorch'],
        estimatedTime: '30-40 hours'
      },
      {
        id: 'rlhf-implementation',
        title: 'RLHF Implementation',
        difficulty: 'Expert',
        description: 'Implement full RLHF pipeline: collect preferences, train reward model, run PPO fine-tuning.',
        skills: ['RLHF', 'RL', 'Training', 'Advanced ML'],
        estimatedTime: '50-70 hours'
      }
    ],
    resources: {
      papers: [
        'LoRA: Low-Rank Adaptation of Large Language Models',
        'QLoRA: Efficient Finetuning of Quantized LLMs',
        'Training Language Models with RLHF',
        'Direct Preference Optimization (DPO)',
        'InstructGPT: Training Language Models to Follow Instructions'
      ],
      tutorials: [
        'Hugging Face PEFT Documentation',
        'Axolotl (fine-tuning tool)',
        'TRL (Transformer Reinforcement Learning)',
        'LLaMA-Factory',
        'DeepSpeed Tutorial'
      ],
      tools: [
        'Hugging Face PEFT',
        'Axolotl',
        'TRL',
        'DeepSpeed',
        'Unsloth (fast training)',
        'Weights & Biases'
      ]
    }
  },
  {
    id: 'ai-safety',
    num: '10',
    icon: '🔐',
    title: 'AI SAFETY & ALIGNMENT',
    level: 'Advanced',
    color: 'var(--neon3)',
    hoverColor: '#ff4d6d',
    description: 'Build safe, aligned, and ethical AI systems. Learn constitutional AI, red-teaming, bias detection, and responsible AI practices.',
    prerequisites: ['LLMs', 'Ethics', 'Security basics'],
    learningObjectives: [
      'Understand AI alignment challenges',
      'Implement safety guardrails',
      'Perform red-team testing',
      'Detect and mitigate bias',
      'Apply constitutional AI',
      'Build responsible AI systems'
    ],
    tags: 'Alignment • Constitutional AI • Red Team • Ethics',
    totalLessons: 12,
    estimatedHours: 26,
    lessons: [
      {
        id: 'ai-safety-intro',
        title: 'AI Safety Fundamentals',
        duration: '2 hours',
        concepts: ['What is AI safety', 'Alignment problem', 'Outer vs inner alignment', 'AI risks', 'Safety priorities']
      },
      {
        id: 'constitutional-ai',
        title: 'Constitutional AI',
        duration: '3 hours',
        concepts: ['Principles-based AI', 'Constitutional principles', 'Self-critique', 'Harmlessness training', 'Anthropic approach']
      },
      {
        id: 'rlhf-safety',
        title: 'RLHF for Safety',
        duration: '2 hours',
        concepts: ['Human feedback for safety', 'Preference modeling', 'Safety rewards', 'Red-teaming during RLHF']
      },
      {
        id: 'guardrails',
        title: 'Safety Guardrails',
        duration: '3 hours',
        concepts: ['Input filtering', 'Output filtering', 'Content moderation', 'Toxicity detection', 'PII detection', 'Guardrails library']
      },
      {
        id: 'red-teaming',
        title: 'Red-Teaming AI Systems',
        duration: '3 hours',
        concepts: ['Adversarial testing', 'Jailbreak attempts', 'Edge cases', 'Automated red-teaming', 'Bug bounties']
      },
      {
        id: 'prompt-injection-defense',
        title: 'Prompt Injection Defense',
        duration: '2 hours',
        concepts: ['Prompt injection attacks', 'Indirect injection', 'Defense strategies', 'Input sanitization', 'Privilege separation']
      },
      {
        id: 'bias-fairness',
        title: 'Bias and Fairness',
        duration: '3 hours',
        concepts: ['Types of bias', 'Bias detection', 'Fairness metrics', 'Debiasing techniques', 'Fairness-aware training']
      },
      {
        id: 'interpretability',
        title: 'Model Interpretability',
        duration: '2 hours',
        concepts: ['Black box problem', 'Attention visualization', 'Feature attribution', 'Mechanistic interpretability', 'SHAP, LIME']
      },
      {
        id: 'privacy',
        title: 'Privacy and Data Protection',
        duration: '2 hours',
        concepts: ['Data privacy', 'PII handling', 'Differential privacy', 'Federated learning', 'GDPR compliance']
      },
      {
        id: 'monitoring-safety',
        title: 'Safety Monitoring',
        duration: '2 hours',
        concepts: ['Runtime monitoring', 'Anomaly detection', 'User feedback loops', 'Safety metrics', 'Incident response']
      },
      {
        id: 'responsible-ai',
        title: 'Responsible AI Principles',
        duration: '1 hour',
        concepts: ['Transparency', 'Accountability', 'Fairness', 'Privacy', 'Beneficence', 'Ethics guidelines']
      },
      {
        id: 'regulatory-compliance',
        title: 'AI Regulation and Compliance',
        duration: '1 hour',
        concepts: ['EU AI Act', 'US Executive Order', 'Industry standards', 'Compliance frameworks', 'Documentation requirements']
      }
    ],
    projects: [
      {
        id: 'safety-wrapper',
        title: 'LLM Safety Wrapper',
        difficulty: 'Intermediate',
        description: 'Build a safety layer that wraps any LLM with input/output filtering, toxicity detection, and PII removal.',
        skills: ['Safety', 'Content moderation', 'APIs'],
        estimatedTime: '20-25 hours'
      },
      {
        id: 'red-team-suite',
        title: 'Automated Red-Teaming Suite',
        difficulty: 'Advanced',
        description: 'Create an automated red-teaming system that generates adversarial prompts and tests model safety.',
        skills: ['Red-teaming', 'Security', 'Testing'],
        estimatedTime: '30-40 hours'
      }
    ],
    resources: {
      papers: [
        'Constitutional AI: Harmlessness from AI Feedback',
        'Red Teaming Language Models',
        'On the Dangers of Stochastic Parrots',
        'Alignment of Language Agents',
        'Universal and Transferable Adversarial Attacks on Aligned LMs'
      ],
      tutorials: [
        'Anthropic Safety Research',
        'OpenAI Safety Best Practices',
        'Guardrails AI Documentation',
        'NeMo Guardrails (NVIDIA)',
        'AI Safety Fundamentals Course'
      ],
      tools: [
        'Guardrails AI',
        'NeMo Guardrails',
        'LlamaGuard',
        'Perspective API (toxicity)',
        'Presidio (PII detection)',
        'Microsoft AI Fairness'
      ]
    }
  },
  {
    id: 'llm-apis',
    num: '11',
    icon: '🔌',
    title: 'LLM APIs & DEPLOYMENT',
    level: 'Intermediate',
    color: 'var(--neon)',
    hoverColor: '#00ff88',
    description: 'Master production LLM deployment. Learn API integration, streaming, rate limiting, caching, monitoring, and cost optimization.',
    prerequisites: ['APIs', 'HTTP', 'Async programming', 'Cloud basics'],
    learningObjectives: [
      'Integrate LLM APIs (OpenAI, Anthropic, etc.)',
      'Implement streaming responses',
      'Handle rate limits and retries',
      'Build caching strategies',
      'Monitor API usage and costs',
      'Deploy production LLM applications'
    ],
    tags: 'API Integration • Streaming • Monitoring • Cost',
    totalLessons: 11,
    estimatedHours: 24,
    lessons: [
      {
        id: 'llm-api-intro',
        title: 'LLM APIs Overview',
        duration: '2 hours',
        concepts: ['API providers', 'Model options', 'Pricing models', 'API keys', 'Authentication']
      },
      {
        id: 'openai-api',
        title: 'OpenAI API Deep Dive',
        duration: '3 hours',
        concepts: ['Chat completions', 'Parameters (temperature, max_tokens)', 'Function calling', 'Vision API', 'Assistants API']
      },
      {
        id: 'anthropic-api',
        title: 'Anthropic Claude API',
        duration: '2 hours',
        concepts: ['Messages API', 'System prompts', 'Tool use', 'Claude models', 'Best practices']
      },
      {
        id: 'streaming',
        title: 'Streaming Responses',
        duration: '3 hours',
        concepts: ['Server-sent events (SSE)', 'Streaming API', 'Client implementation', 'Error handling', 'Progress indicators']
      },
      {
        id: 'rate-limiting',
        title: 'Rate Limiting and Retries',
        duration: '2 hours',
        concepts: ['Rate limits', 'Exponential backoff', 'Retry logic', 'Queue management', 'Batch processing']
      },
      {
        id: 'caching',
        title: 'Caching Strategies',
        duration: '2 hours',
        concepts: ['Response caching', 'Semantic caching', 'Cache invalidation', 'Cache keys', 'Redis integration']
      },
      {
        id: 'error-handling',
        title: 'Error Handling and Fallbacks',
        duration: '2 hours',
        concepts: ['API errors', 'Timeout handling', 'Fallback models', 'Circuit breakers', 'Graceful degradation']
      },
      {
        id: 'monitoring',
        title: 'Monitoring and Observability',
        duration: '2 hours',
        concepts: ['Logging', 'Metrics', 'Tracing', 'Latency tracking', 'Error rates', 'Dashboards']
      },
      {
        id: 'cost-optimization',
        title: 'Cost Optimization',
        duration: '2 hours',
        concepts: ['Token optimization', 'Model selection', 'Caching impact', 'Prompt compression', 'Usage tracking']
      },
      {
        id: 'multi-provider',
        title: 'Multi-Provider Strategy',
        duration: '2 hours',
        concepts: ['Provider abstraction', 'Load balancing', 'Failover', 'Cost comparison', 'LiteLLM']
      },
      {
        id: 'production-deployment',
        title: 'Production Deployment',
        duration: '2 hours',
        concepts: ['Infrastructure', 'Scaling', 'Security', 'Compliance', 'SLAs', 'Disaster recovery']
      }
    ],
    projects: [
      {
        id: 'llm-gateway',
        title: 'LLM API Gateway',
        difficulty: 'Intermediate',
        description: 'Build a gateway that abstracts multiple LLM providers with caching, rate limiting, and monitoring.',
        skills: ['APIs', 'Caching', 'Monitoring', 'Backend'],
        estimatedTime: '25-30 hours'
      },
      {
        id: 'streaming-chat-app',
        title: 'Production Streaming Chat App',
        difficulty: 'Intermediate',
        description: 'Create a full-stack chat application with streaming responses, error handling, and cost tracking.',
        skills: ['Streaming', 'Frontend', 'Backend', 'Full-stack'],
        estimatedTime: '30-40 hours'
      }
    ],
    resources: {
      papers: [],
      tutorials: [
        'OpenAI API Documentation',
        'Anthropic API Documentation',
        'LiteLLM Documentation',
        'Vercel AI SDK Tutorial',
        'LangChain API Integration'
      ],
      tools: [
        'OpenAI SDK',
        'Anthropic SDK',
        'LiteLLM',
        'Vercel AI SDK',
        'LangSmith',
        'Helicone (monitoring)'
      ]
    }
  },
  {
    id: 'multimodal-ai',
    num: '12',
    icon: '🎨',
    title: 'MULTIMODAL AI',
    level: 'Advanced',
    color: 'var(--neon2)',
    hoverColor: '#00cfff',
    description: 'Master AI that understands multiple modalities. Learn vision-language models, image generation, audio processing, and cross-modal tasks.',
    prerequisites: ['Computer vision basics', 'Audio processing', 'LLMs'],
    learningObjectives: [
      'Understand multimodal architectures',
      'Use vision-language models (GPT-4V, Claude)',
      'Generate images with diffusion models',
      'Process and generate audio',
      'Build cross-modal applications',
      'Handle video understanding'
    ],
    tags: 'Vision • Image Gen • Speech • Cross-Modal',
    totalLessons: 13,
    estimatedHours: 30,
    lessons: [
      {
        id: 'multimodal-intro',
        title: 'Multimodal AI Fundamentals',
        duration: '2 hours',
        concepts: ['What is multimodal AI', 'Modalities (text, image, audio, video)', 'Cross-modal tasks', 'Use cases']
      },
      {
        id: 'vision-language',
        title: 'Vision-Language Models',
        duration: '3 hours',
        concepts: ['GPT-4V', 'Claude 3 vision', 'CLIP', 'LLaVA', 'Image understanding', 'Image captioning']
      },
      {
        id: 'gpt4v-claude',
        title: 'Using GPT-4V and Claude Vision',
        duration: '2 hours',
        concepts: ['Image input', 'Multi-image reasoning', 'OCR', 'Chart analysis', 'Diagram understanding']
      },
      {
        id: 'diffusion-models',
        title: 'Diffusion Models for Image Generation',
        duration: '3 hours',
        concepts: ['Stable Diffusion', 'DALL-E', 'Midjourney', 'Diffusion process', 'Noise scheduling', 'Sampling methods']
      },
      {
        id: 'image-generation',
        title: 'Image Generation APIs',
        duration: '2 hours',
        concepts: ['DALL-E API', 'Stable Diffusion API', 'Prompt engineering for images', 'Image editing', 'In-painting/out-painting']
      },
      {
        id: 'controlnet',
        title: 'ControlNet and Image Control',
        duration: '2 hours',
        concepts: ['ControlNet', 'Pose control', 'Depth maps', 'Edge detection', 'Composition control']
      },
      {
        id: 'audio-processing',
        title: 'Audio Processing with AI',
        duration: '3 hours',
        concepts: ['Whisper (speech-to-text)', 'TTS (text-to-speech)', 'Audio generation', 'Music generation', 'Audio embeddings']
      },
      {
        id: 'speech-recognition',
        title: 'Speech Recognition',
        duration: '2 hours',
        concepts: ['Whisper deep dive', 'Real-time transcription', 'Speaker diarization', 'Translation', 'Multilingual ASR']
      },
      {
        id: 'tts',
        title: 'Text-to-Speech Systems',
        duration: '2 hours',
        concepts: ['OpenAI TTS', 'ElevenLabs', 'Voice cloning', 'Prosody control', 'Multilingual TTS']
      },
      {
        id: 'video-understanding',
        title: 'Video Understanding',
        duration: '3 hours',
        concepts: ['Video as frames', 'Temporal reasoning', 'Action recognition', 'Video captioning', 'Video Q&A']
      },
      {
        id: 'clip-embeddings',
        title: 'CLIP and Cross-Modal Embeddings',
        duration: '2 hours',
        concepts: ['CLIP architecture', 'Text-image alignment', 'Zero-shot classification', 'Image search', 'Cross-modal retrieval']
      },
      {
        id: 'multimodal-rag',
        title: 'Multimodal RAG',
        duration: '2 hours',
        concepts: ['Indexing images/videos', 'Multimodal retrieval', 'Document with images', 'Cross-modal search']
      },
      {
        id: 'multimodal-production',
        title: 'Production Multimodal Systems',
        duration: '2 hours',
        concepts: ['Storage (images, video)', 'Streaming', 'CDN integration', 'Cost optimization', 'Monitoring']
      }
    ],
    projects: [
      {
        id: 'visual-qa-system',
        title: 'Visual Q&A System',
        difficulty: 'Intermediate',
        description: 'Build a system that answers questions about images using GPT-4V or Claude. Support charts, diagrams, photos.',
        skills: ['Vision-language', 'APIs', 'Frontend'],
        estimatedTime: '20-25 hours'
      },
      {
        id: 'image-gen-app',
        title: 'AI Image Generation Platform',
        difficulty: 'Intermediate',
        description: 'Create a full platform for image generation with prompt templates, style controls, and galleries.',
        skills: ['Diffusion models', 'APIs', 'Full-stack'],
        estimatedTime: '30-40 hours'
      },
      {
        id: 'multimodal-search',
        title: 'Multimodal Search Engine',
        difficulty: 'Advanced',
        description: 'Build a search engine that works across text, images, and audio. Support cross-modal queries.',
        skills: ['CLIP', 'Embeddings', 'Search', 'Multimodal'],
        estimatedTime: '40-50 hours'
      }
    ],
    resources: {
      papers: [
        'CLIP: Learning Transferable Visual Models',
        'Stable Diffusion: High-Resolution Image Synthesis',
        'LLaVA: Visual Instruction Tuning',
        'Flamingo: Visual Language Model',
        'Robust Speech Recognition via Large-Scale Weak Supervision (Whisper)'
      ],
      tutorials: [
        'GPT-4V Guide',
        'Stable Diffusion Tutorial',
        'Whisper Documentation',
        'CLIP Tutorial',
        'Hugging Face Diffusers'
      ],
      tools: [
        'OpenAI GPT-4V',
        'Anthropic Claude Vision',
        'Stable Diffusion',
        'Whisper',
        'ElevenLabs',
        'Replicate'
      ]
    }
  }
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
