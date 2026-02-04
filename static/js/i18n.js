/**
 * i18n.js - 多语言配置文件
 * 中英双语支持
 */

const i18n = {
  zh: {
    // Navigation
    nav: {
      about: '关于',
      experience: '经历',
      projects: '项目',
      skills: '技能',
      contact: '联系'
    },

    // Hero Section
    hero: {
      name: '王凯',
      nameEn: 'Townsend',
      title: 'AI 产品经理',
      tagline: '「AI赋能业务落地，从0到1打造智能产品」',
      cta: {
        projects: '查看项目',
        contact: '联系我'
      }
    },

    // About Section
    about: {
      title: '关于我',
      subtitle: '拥有7年数字化与AI产品经验，专注于将前沿AI技术与业务场景深度融合',
      description: [
        '我是一名<strong>AI产品经理</strong>，拥有从0到1的产品建设经验，具备前沿AI技术与业务场景结合能力。',
        '五年数字化解决方案、两年AI产品落地经验，主导过20余个数字化项目，涵盖售前咨询、解决方案设计、产品规划与招投标支持。',
        '独特的<strong>建筑景观设计背景</strong>让我能够天然站在一线使用者的视角，而非纯技术视角，真正理解业务痛点。'
      ],
      tags: ['AI产品规划', '多智能体架构', 'RAG系统', 'LLM应用', '数字化转型', '设计院背景', 'ToB/ToG经验'],
      stats: {
        years: { value: '7+', label: '年经验' },
        projects: { value: '20+', label: '个项目' },
        cost: { value: '270万', label: '年节约成本' }
      }
    },

    // Timeline Section
    timeline: {
      title: '职业经历',
      subtitle: '从景观设计到AI产品，一条清晰的数字化转型之路',
      items: [
        {
          date: '2023.09 - 至今',
          role: 'AI 产品经理',
          company: '华建集团现代建筑装饰环境设计研究院',
          description: '深度参与设计院数字化转型升级，主导AI Hackathon，推动AI生图系统、知识库助手等产品落地。'
        },
        {
          date: '2021.07 - 2023.05',
          role: '数创中心解决方案',
          company: '上海境上景观设计有限公司',
          description: '项目全链路管理，负责需求分析、蓝图设计、产品规划、业务汇报及AI内部试点创新。'
        },
        {
          date: '2019.03 - 2021.06',
          role: '数字化解决方案',
          company: 'MBDI英斯佛朗环境规划设计有限公司',
          description: '负责智慧景区、园区、校园等数字化方案设计，主导项目总额达2000万。'
        }
      ]
    },

    // Projects Section
    projects: {
      title: '代表项目',
      subtitle: '从多智能体系统到AI生图，每个项目都是一次从0到1的突破',
      items: [
        {
          icon: 'smart_toy',
          title: '临港算力园区"三位数字员工"AI平台',
          date: '2025.10 - 2026.01',
          brief: '面向中国电信临港算力园区，构建L1-L2多智能体协同架构的AI驱动型园区操作系统。',
          overview: '主导面向临港算力园区的智慧化升级项目，从0到1构建以"L1-L2多智能体协同架构"为核心的AI驱动型园区操作系统。面向访客、员工、物业三类用户，打造AI访客助理、AI办公秘书、AI物业管家三位"数字员工"。',
          responsibilities: [
            '创新设计"L1指挥官-L2专家"双层协同架构，纳管12个垂类Agent',
            '引入MCP标准协议，将RAG检索、工单引擎、门禁控制等封装为标准化工具',
            '设计全流程无感通行方案，实现秒级访客通行',
            '规划并建设7大公共软件服务能力'
          ],
          metrics: [
            { value: '90%', label: '通行效率提升' },
            { value: '12', label: '个垂类Agent' },
            { value: '70%', label: '会议效率提升' }
          ]
        },
        {
          icon: 'palette',
          title: '"创寰师"AI智慧生图系统',
          date: '2024.09 - 2025.09',
          brief: '主导设计院AI生图系统从0到1的全流程产品开发，实现效果图生成效率跨越。',
          overview: '面向景观、建筑、室内设计领域，构建集概念生成、方案优化、风格管理于一体的智能设计平台。整合Stable Diffusion、ControlNet、LoRA等前沿AI技术。',
          responsibilities: [
            '主导需求分析，明确七大核心应用场景',
            '定义产品MVP边界，确保150+用户并发、生图响应时间≤120秒',
            '主导构建超5万张标注数据集',
            '建立业务价值指标体系，追踪成本与效率目标'
          ],
          metrics: [
            { value: '270万', label: '年节约成本' },
            { value: '70%', label: '效率提升' },
            { value: '15%', label: '中标率提升' }
          ]
        },
        {
          icon: 'menu_book',
          title: '"知寰库"AI规范查询助手',
          date: '2023.12 - 2024.06',
          brief: '基于RAG框架，构建设计院专业知识库智能管理系统，解决规范查询效率痛点。',
          overview: '解决设计规范查询效率低、标准更新滞后、合规校验依赖人工等行业痛点。采用混合云架构，设计HyDE增强检索和多路召回策略。',
          responsibilities: [
            '深入调研12位资深设计师需求',
            '采用混合云架构（本地知识处理+公有云推理）',
            '整合2.8万+设计规范文档，构建语义分段知识图谱',
            '优化语义扩写模块，模型幻觉降低至3%以下'
          ],
          metrics: [
            { value: '15min→40s', label: '检索耗时' },
            { value: '92%', label: '匹配准确率' },
            { value: '450+', label: '日均查询' }
          ]
        },
        {
          icon: 'tour',
          title: '启东协兴港智慧文旅解决方案',
          date: '2020.09 - 2021.03',
          brief: '提出"1+4+N"智慧文旅架构，推进VR/AR场景落地，游客数量增加约30%。',
          overview: '访谈招商集团领导和员工20余次，面向居民和游客发放问卷200+，绘制4份用户旅程图，全面分析痛点并设计解决方案。',
          responsibilities: [
            '提出"1+4+N"智慧文旅架构，搭建5G管控平台',
            '构建"十里海滩云游览"场景，建立渔港文化数据库',
            '融合VR、AR、全景摄影、数字孪生等技术',
            '与招商集团现场汇报5次，线上会议20余次'
          ],
          metrics: [
            { value: '30%', label: '游客增长' },
            { value: '200+', label: '用户问卷' },
            { value: '5G', label: '管控平台' }
          ]
        }
      ],
      viewDetails: '查看详情 →'
    },

    // Skills Section
    skills: {
      title: '专业技能',
      subtitle: '产品思维与技术理解的深度融合',
      categories: [
        {
          name: '产品管理',
          icon: 'layers',
          items: [
            { name: 'AIGC产品规划', level: 95 },
            { name: '需求分析与MVP设计', level: 90 },
            { name: '项目管理与敏捷开发', level: 85 },
            { name: '用户体验设计', level: 88 }
          ]
        },
        {
          name: '技术能力',
          icon: 'developer_board',
          items: [
            { name: 'RAG系统架构', level: 90 },
            { name: 'LLM模型选型与调优', level: 85 },
            { name: '多智能体协同', level: 88 },
            { name: '数据驱动决策', level: 82 }
          ]
        },
        {
          name: '工具与平台',
          icon: 'construction',
          items: [
            { name: 'Figma / Axure / 墨刀', level: 92 },
            { name: 'Dify / Coze / Cursor', level: 88 },
            { name: 'Midjourney / SD', level: 85 },
            { name: 'MySQL / Milvus', level: 75 }
          ]
        }
      ]
    },

    // Contact Section
    contact: {
      title: '联系方式',
      subtitle: '期待与您的交流与合作',
      info: {
        title: '联系信息',
        items: [
          { icon: 'email', label: '邮箱', value: '1255491725@qq.com' },
          { icon: 'smartphone', label: '电话/微信', value: '17321252570' },
          { icon: 'location_on', label: '位置', value: '上海市闵行区' }
        ]
      },
      wechat: {
        title: '微信扫码添加',
        placeholder: '微信二维码'
      }
    },

    // Footer
    footer: {
      copyright: '© 2026 Townsend. All rights reserved.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn'
      }
    },

    // Modal
    modal: {
      overview: '项目概述',
      responsibilities: '核心职责',
      results: '关键成果',
      close: '关闭'
    }
  },

  en: {
    // Navigation
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },

    // Hero Section
    hero: {
      name: 'Kai Wang',
      nameEn: 'Townsend',
      title: 'AI Product Manager',
      tagline: '"From 0 to 1, Empowering Business with AI Products"',
      cta: {
        projects: 'View Projects',
        contact: 'Contact Me'
      }
    },

    // About Section
    about: {
      title: 'About Me',
      subtitle: '7+ years in digitalization and AI products, focusing on integrating cutting-edge AI with business scenarios',
      description: [
        'I am an <strong>AI Product Manager</strong> with end-to-end product development experience, capable of bridging frontier AI technology with real business scenarios.',
        'With 5 years in digital solutions and 2 years in AI product implementation, I\'ve led 20+ digitalization projects covering pre-sales consulting, solution design, product planning, and bidding support.',
        'My unique <strong>architecture and landscape design background</strong> enables me to naturally stand from the end-user perspective rather than pure technical viewpoint.'
      ],
      tags: ['AI Product Planning', 'Multi-Agent Systems', 'RAG Systems', 'LLM Applications', 'Digital Transformation', 'Design Institute Background', 'ToB/ToG Experience'],
      stats: {
        years: { value: '7+', label: 'Years Experience' },
        projects: { value: '20+', label: 'Projects Led' },
        cost: { value: '¥2.7M', label: 'Annual Cost Saved' }
      }
    },

    // Timeline Section
    timeline: {
      title: 'Career Journey',
      subtitle: 'A clear path from landscape design to AI product management',
      items: [
        {
          date: '2023.09 - Present',
          role: 'AI Product Manager',
          company: 'ARCVISA Design & Research Institute, Huajian Group',
          description: 'Deeply involved in design institute\'s digital transformation, led AI Hackathon, drove AI image generation system and knowledge base assistant to production.'
        },
        {
          date: '2021.07 - 2023.05',
          role: 'Digital Innovation Solutions',
          company: 'Shanghai Jingshang Landscape Design Co., Ltd.',
          description: 'Full-cycle project management, responsible for requirement analysis, blueprint design, product planning, and AI pilot innovation.'
        },
        {
          date: '2019.03 - 2021.06',
          role: 'Digitalization Solutions',
          company: 'MBDI Infor Design Co., Ltd.',
          description: 'Led smart tourism, campus, and park digitalization projects with total value reaching ¥20M.'
        }
      ]
    },

    // Projects Section
    projects: {
      title: 'Featured Projects',
      subtitle: 'From multi-agent systems to AI image generation, each project is a breakthrough from 0 to 1',
      items: [
        {
          icon: 'smart_toy',
          title: 'Lingang Computing Park "Three Digital Employees" AI Platform',
          date: '2025.10 - 2026.01',
          brief: 'For China Telecom Lingang Computing Park, built an AI-driven park operating system with L1-L2 multi-agent collaborative architecture.',
          overview: 'Led the smart upgrade project for Lingang Computing Park, building from scratch an AI-driven park operating system with "L1-L2 Multi-Agent Collaborative Architecture" at its core. Created three "Digital Employees": AI Visitor Assistant, AI Office Secretary, and AI Property Manager.',
          responsibilities: [
            'Innovatively designed "L1 Commander - L2 Expert" dual-layer collaborative architecture, managing 12 vertical Agents',
            'Introduced MCP standard protocol, encapsulating RAG retrieval, work order engine, access control as standardized tools',
            'Designed seamless visitor passage solution achieving second-level visitor access',
            'Planned and built 7 major public software service capabilities'
          ],
          metrics: [
            { value: '90%', label: 'Access Efficiency↑' },
            { value: '12', label: 'Vertical Agents' },
            { value: '70%', label: 'Meeting Efficiency↑' }
          ]
        },
        {
          icon: 'palette',
          title: '"CHUANG HUAN SHI" AI Image Generation System',
          date: '2024.09 - 2025.09',
          brief: 'Led the end-to-end product development of AI image generation system for design institute, achieving efficiency breakthrough.',
          overview: 'For landscape, architecture, and interior design fields, built an intelligent design platform integrating concept generation, scheme optimization, and style management. Integrated cutting-edge AI technologies including Stable Diffusion, ControlNet, and LoRA.',
          responsibilities: [
            'Led requirement analysis, identified seven core application scenarios',
            'Defined MVP boundaries, ensuring 150+ concurrent users, image generation ≤120s',
            'Led construction of 50,000+ annotated dataset',
            'Established business value metrics tracking cost and efficiency targets'
          ],
          metrics: [
            { value: '¥2.7M', label: 'Annual Savings' },
            { value: '70%', label: 'Efficiency↑' },
            { value: '15%', label: 'Win Rate↑' }
          ]
        },
        {
          icon: 'menu_book',
          title: '"ZHI HUAN KU" AI Standard Query Assistant',
          date: '2023.12 - 2024.06',
          brief: 'Built intelligent knowledge base management system based on RAG framework, solving standard query efficiency pain points.',
          overview: 'Addressed industry pain points of low efficiency in design standard queries, outdated standards, and manual compliance verification. Adopted hybrid cloud architecture with HyDE-enhanced retrieval and multi-path recall strategies.',
          responsibilities: [
            'In-depth research with 12 senior designers',
            'Adopted hybrid cloud architecture (local knowledge processing + public cloud inference)',
            'Integrated 28,000+ design standard documents, built semantic segmentation knowledge graph',
            'Optimized semantic expansion module, reduced model hallucination to below 3%'
          ],
          metrics: [
            { value: '15min→40s', label: 'Query Time' },
            { value: '92%', label: 'Match Accuracy' },
            { value: '450+', label: 'Daily Queries' }
          ]
        },
        {
          icon: 'tour',
          title: 'Qidong Xiexing Port Smart Tourism Solution',
          date: '2020.09 - 2021.03',
          brief: 'Proposed "1+4+N" smart tourism architecture, implemented VR/AR scenarios, increased visitor count by ~30%.',
          overview: 'Conducted 20+ interviews with CMG leaders and staff, distributed 200+ questionnaires to residents and tourists, created 4 user journey maps to comprehensively analyze pain points and design solutions.',
          responsibilities: [
            'Proposed "1+4+N" smart tourism architecture with 5G control platform',
            'Built "Ten-Mile Beach Cloud Tour" scenario, established fishing port cultural database',
            'Integrated VR, AR, panoramic photography, and digital twin technologies',
            'Presented to CMG 5 times on-site, 20+ online meetings'
          ],
          metrics: [
            { value: '30%', label: 'Visitor Growth' },
            { value: '200+', label: 'Surveys' },
            { value: '5G', label: 'Control Platform' }
          ]
        }
      ],
      viewDetails: 'View Details →'
    },

    // Skills Section
    skills: {
      title: 'Skills',
      subtitle: 'Deep integration of product thinking and technical understanding',
      categories: [
        {
          name: 'Product Management',
          icon: 'layers',
          items: [
            { name: 'AIGC Product Planning', level: 95 },
            { name: 'Requirement Analysis & MVP', level: 90 },
            { name: 'Project & Agile Management', level: 85 },
            { name: 'User Experience Design', level: 88 }
          ]
        },
        {
          name: 'Technical Skills',
          icon: 'developer_board',
          items: [
            { name: 'RAG System Architecture', level: 90 },
            { name: 'LLM Selection & Tuning', level: 85 },
            { name: 'Multi-Agent Collaboration', level: 88 },
            { name: 'Data-Driven Decision', level: 82 }
          ]
        },
        {
          name: 'Tools & Platforms',
          icon: 'construction',
          items: [
            { name: 'Figma / Axure / Modao', level: 92 },
            { name: 'Dify / Coze / Cursor', level: 88 },
            { name: 'Midjourney / SD', level: 85 },
            { name: 'MySQL / Milvus', level: 75 }
          ]
        }
      ]
    },

    // Contact Section
    contact: {
      title: 'Contact',
      subtitle: 'Looking forward to connecting with you',
      info: {
        title: 'Contact Info',
        items: [
          { icon: 'email', label: 'Email', value: '1255491725@qq.com' },
          { icon: 'smartphone', label: 'Phone/WeChat', value: '+86 17321252570' },
          { icon: 'location_on', label: 'Location', value: 'Shanghai, China' }
        ]
      },
      wechat: {
        title: 'Scan to add WeChat',
        placeholder: 'WeChat QR Code'
      }
    },

    // Footer
    footer: {
      copyright: '© 2026 Townsend. All rights reserved.',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn'
      }
    },

    // Modal
    modal: {
      overview: 'Overview',
      responsibilities: 'Key Responsibilities',
      results: 'Key Results',
      close: 'Close'
    }
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18n;
}
