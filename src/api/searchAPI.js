// Mock search results based on different query types
const mockSearchResults = {
    weather: {
      query: "weather",
      results: [
        {
          id: "w1",
          title: "Current Weather Conditions",
          description: "Real-time weather updates for your location",
          url: "https://example.com/weather",
          metadata: {
            temperature: 72,
            condition: "Partly Cloudy",
            humidity: 45,
            windSpeed: 8
          }
        },
        {
          id: "w2",
          title: "Weather Forecast",
          description: "5-day weather forecast and predictions",
          url: "https://example.com/forecast",
          metadata: {
            forecast: [
              { day: "Monday", high: 75, low: 60, condition: "Sunny" },
              { day: "Tuesday", high: 70, low: 55, condition: "Cloudy" }
            ]
          }
        },
        {
          id: "w3",
          title: "Severe Weather Alerts",
          description: "Weather warnings and alerts for your region",
          url: "https://example.com/alerts",
          metadata: {
            alerts: [],
            status: "All Clear"
          }
        }
      ],
      metadata: {
        resultCount: 3,
        searchTime: "0.235 seconds",
        provider: "WeatherAPI"
      }
    },
    news: {
      query: "news",
      results: [
        {
          id: "n1",
          title: "Today's Top Headlines",
          description: "Breaking news and top stories from around the world",
          url: "https://example.com/news/top",
          metadata: {
            category: "General",
            publishDate: "2025-04-08T09:30:15Z"
          }
        },
        {
          id: "n2",
          title: "Technology News Updates",
          description: "Latest in tech innovation and industry developments",
          url: "https://example.com/news/tech",
          metadata: {
            category: "Technology",
            publishDate: "2025-04-08T08:15:22Z"
          }
        },
        {
          id: "n3",
          title: "Business and Finance News",
          description: "Updates on markets, business trends, and economic indicators",
          url: "https://example.com/news/business",
          metadata: {
            category: "Business",
            publishDate: "2025-04-08T07:45:10Z"
          }
        },
        {
          id: "n4",
          title: "Science and Health News",
          description: "Discoveries, medical breakthroughs, and health information",
          url: "https://example.com/news/science",
          metadata: {
            category: "Science",
            publishDate: "2025-04-07T22:10:05Z"
          }
        }
      ],
      metadata: {
        resultCount: 4,
        searchTime: "0.142 seconds",
        provider: "NewsAPI"
      }
    },
    tech: {
      query: "tech",
      results: [
        {
          id: "t1",
          title: "Latest Smartphone Reviews",
          description: "Reviews of the newest smartphone releases and updates",
          url: "https://example.com/tech/smartphones",
          metadata: {
            category: "Smartphones",
            rating: 4.7
          }
        },
        {
          id: "t2",
          title: "AI and Machine Learning Advancements",
          description: "Recent breakthroughs in artificial intelligence research",
          url: "https://example.com/tech/ai",
          metadata: {
            category: "Artificial Intelligence",
            trending: true
          }
        },
        {
          id: "t3",
          title: "Quantum Computing Developments",
          description: "Latest progress in quantum computing technology",
          url: "https://example.com/tech/quantum",
          metadata: {
            category: "Quantum Computing",
            complexity: "Advanced"
          }
        }
      ],
      metadata: {
        resultCount: 3,
        searchTime: "0.189 seconds",
        provider: "TechAPI"
      }
    },
    ai: {
      query: "ai",
      results: [
        {
          id: "ai1",
          title: "Introduction to Artificial Intelligence",
          description: "Basic concepts and applications of AI technology",
          url: "https://example.com/ai/intro",
          metadata: {
            difficulty: "Beginner",
            topics: ["Machine Learning", "Neural Networks", "AI Ethics"]
          }
        },
        {
          id: "ai2",
          title: "AI in Healthcare Applications",
          description: "How artificial intelligence is transforming medical diagnosis and treatment",
          url: "https://example.com/ai/healthcare",
          metadata: {
            industry: "Healthcare",
            impactLevel: "High"
          }
        },
        {
          id: "ai3",
          title: "AI Development Frameworks",
          description: "Popular frameworks and tools for AI development",
          url: "https://example.com/ai/frameworks",
          metadata: {
            frameworks: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
            programmingLanguages: ["Python", "R", "Julia"]
          }
        }
      ],
      metadata: {
        resultCount: 3,
        searchTime: "0.212 seconds",
        provider: "AIAPI"
      }
    }
  };
  
  // Generic result for any query not specifically matched
  const genericResult = {
    query: "",
    results: [
      {
        id: "g1",
        title: "Search Results",
        description: "Results for your search query",
        url: "https://example.com/search",
        metadata: {
          relevance: "Medium"
        }
      },
      {
        id: "g2",
        title: "Related Information",
        description: "Additional information related to your search",
        url: "https://example.com/related",
        metadata: {
          relevance: "Low"
        }
      }
    ],
    metadata: {
      resultCount: 2,
      searchTime: "0.178 seconds",
      provider: "GenericAPI"
    }
  };
  
  // Function to simulate API search
  export const searchApi = async (query) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Check if we have mock data for this query
    const lowerQuery = query.toLowerCase().trim();
    
    // Check for exact matches first
    if (lowerQuery in mockSearchResults) {
      return { 
        ...mockSearchResults[lowerQuery],
        query: query 
      };
    }
    
    // Check for partial matches in our predefined categories
    for (const key in mockSearchResults) {
      if (lowerQuery.includes(key)) {
        return { 
          ...mockSearchResults[key],
          query: query 
        };
      }
    }
    
    // Return generic results if no match found
    return { 
      ...genericResult, 
      query: query 
    };
  };
  