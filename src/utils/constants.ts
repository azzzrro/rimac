import buildingMaterials from "./buildingMaterials.json";
import fireSafety from "./fire-safety.json";
import {
  CheckCircle,
  Wrench,
  Layers,
  Repeat,
  Shield,
  Zap,
  Package,
  Settings,
  Weight,
  ShieldCheck,
  Timer,
  Lock,
  DollarSign,
  Frame,
  RefreshCw,
  ArrowUpDown,
} from "lucide-react";

interface ProductSpecs {
  [key: string]: string | undefined;
}

export interface Product {
  id: number;
  name: string;
  images: string[];
  subcategory: string;
  specs?: ProductSpecs;
  description?: string;
}

interface CategoryData {
  title: string;
  description: string;
  subcategories: string[];
  products?: Product[];
  color: string;
}

export const categoryData: Record<string, CategoryData> = {
  "building-materials": {
    title: "Building Materials",
    description: "High-quality materials for your construction needs",
    subcategories: [
      "All",
      "Insulation & Concrete Work Accessories",
      "Block Work & Plastering Accessories",
      "Materials For Construction",
      "Plywood & Timber",
      "Gypsum & Partitioning Solutions",
      "Architectural Engineering Solutions",
      "Cable Management System",
    ],
    products: buildingMaterials,
    color: "blue",
  },
  "fire-safety": {
    title: "Fire Safety Equipment",
    description:
      "Protect your premises with our certified fire safety products",
    subcategories: [
      "All",
      "Ductile Iron Grooved Fittings and Couplings",
      "Malleable Iron Pipe Fittings",
      "Pipe Fittings",
      "Other Products",
    ],
    products: fireSafety,
    color: "red",
  },
  scaffolding: {
    title: "Scaffolding Solutions",
    description:
      "Safe and reliable scaffolding for all your construction projects",
    subcategories: [
      "Cuplock System",
      "Ringlock System",
      "H Frame System",
      "Tube Fitting System",
      "Prop System",
    ],
    color: "green",
  },
};

export const scaffoldingSubcategoryDetails = {
  "Cuplock System": {
    title: "Cuplock System",
    description:
      "The Cuplock System is a highly popular and versatile modular scaffolding system widely used in construction and industrial applications. Known for its efficiency, safety, and ease of assembly, this system employs a unique locking mechanism that simplifies the assembly process, ensuring a secure and stable scaffold structure. The Cuplock System comprises vertical standards, horizontal ledgers, and diagonal braces, all interconnected through a cup-and-cone locking system.",
    keyFeatures: [
      {
        title: "Cup-and-Cone Locking Mechanism",
        description:
          "The Cuplock System features a distinctive cup-and-cone locking mechanism, allowing for quick and secure connections between components. This system ensures both vertical and horizontal stability.",
        icon: CheckCircle,
      },
      {
        title: "Modular Design",
        description:
          "Highly modular, the Cuplock System includes interchangeable components that can be configured to meet various construction needs.",
        icon: Layers,
      },
      {
        title: "Versatility",
        description:
          "Suitable for both temporary and permanent applications, including access scaffolding, formwork support, and shoring.",
        icon: Repeat,
      },
      {
        title: "Adjustability",
        description:
          "The system allows for height and width adjustments, accommodating different building heights and site requirements.",
        icon: Wrench,
      },
      {
        title: "Durability",
        description:
          "Made from high-strength steel, the components offer durability and resistance to heavy loads and harsh environmental conditions.",
        icon: Shield,
      },
      {
        title: "Ease of Assembly",
        description:
          "The design facilitates faster assembly and disassembly compared to traditional scaffolding systems, reducing labour time and costs.",
        icon: Zap,
      },
    ],
    technical: {
      image:
        "https://images.unsplash.com/photo-1642420776022-c0f63ee8272a?q=80&w=3130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      accordions: [
        {
          title: "Vertical Standard (Open End)",
          description: "Vertical Standards info",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG) PAINTED"],
            rows: [
              ["MSV500", "500", "2.50"],
              ["MSV1000WS", "1000", "4.50"],
              ["MSV1500S", "1500", "6.75"],
              ["MSV2000S", "2000", "9.00"],
              ["MSV2500S", "2500", "11.20"],
              ["MSV3000S", "3000", "13.40"],
            ],
          },
        },
        {
          title: "Ledger Blade - Closed",
          description: "Horizontal Ledgers info",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG) PAINTED"],
            rows: [
              ["MSL500BS", "500", "2.00"],
              ["MSL900BS", "900", "3.30"],
              ["MSL1000BS", "1000", "3.60"],
              ["MSL1200BS", "1200", "4.30"],
              ["MSL1500BS", "1500", "5.30"],
              ["MSL1800BS", "1800", "6.30"],
              ["MSL2000BS", "2000", "7.00"],
            ],
          },
        },
        {
          title: "Vertical Standards (With Socket)",
          description:
            "SB make Vertical with Socket made from 48.3mm diameter x 3mm thick high grade mild steel tube. SB Lock System Standards (Vertical) are formed by two cups: a fixed bottom cup welded to the Standard (Vertical) at pre-located intervals (i.e. 500mm) and a sliding top cup. This vertical will not require any extra spigot for the connection.",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG) PAINTED"],
            rows: [
              ["MSV500ST", "500", "3.00"],
              ["MSV1000ST", "1000", "5.10"],
              ["MSV1500WS", "1500", "7.20"],
              ["MSV2000ST", "2000", "9.60"],
              ["MSV2500ST", "2500", "12.00"],
              ["MSV3000ST", "3000", "14.00"],
            ],
          },
        },
      ],
    },
    benefits: [
      {
        title: "Enhanced Safety",
        description:
          "The secure locking mechanism and stable structure minimize the risk of collapse or instability, enhancing safety",
        icon: Shield,
      },
      {
        title: "Increased Efficiency",
        description:
          "Quick assembly and disassembly reduce construction time and labour costs, making the system cost-effective.",
        icon: Zap,
      },
      {
        title: "Reduced Inventory Needs",
        description:
          "Interchangeable parts reduce the need for a large inventory of different scaffold components, simplifying logistics and storage",
        icon: Package,
      },
      {
        title: "Flexibility",
        description:
          "The modular nature allows for customization to fit various project requirements, including complex and high-rise structures.",
        icon: Settings,
      },
      {
        title: "High Load Capacity",
        description:
          "Supports heavy loads, making it suitable for demanding applications and ensuring the integrity of the scaffolding structure.",
        icon: Weight,
      },
    ],
    products: [
      {
        name: "Standards/Verticals",
        description:
          "Vertical components that provide support for the entire scaffold structure. They are equipped with cups at regular intervals of 500 mm.",
        image: "/scaffolding/cuplock_system/standards.png",
      },
      {
        name: "Ledgers",
        description:
          "Horizontal components that connect between standards, providing lateral stability and support for decking.",
        image: "/scaffolding/cuplock_system/ledgers.png",
      },
      {
        name: "Braces",
        description:
          "Diagonal components that add rigidity to the scaffold, preventing swaying or buckling.",
        image: "/scaffolding/cuplock_system/braces.png",
      },
      {
        name: "Boards",
        description:
          "Platforms or decking are used to create a working surface on the scaffold, and they are available in wooden or metal options.",
        image: "/scaffolding/cuplock_system/boards.png",
      },
      {
        name: "Base Plates",
        description:
          "Plates at the bottom of the standards to distribute the load evenly and provide stability on uneven ground.",
        image: "/scaffolding/cuplock_system/base_plates.png",
      },
      {
        name: "Clamps",
        description:
          "Used to secure the ledgers and braces to the standards, ensuring all components are tightly locked in place.",
        image: "/scaffolding/cuplock_system/clamps.png",
      },
    ],
    applications: {
      points: [
        {
          title: "Construction Sites",
          description:
            "Ideal for building and maintaining structures, including high-rise buildings, bridges, and industrial plants.",
        },
        {
          title: "Maintenance Work",
          description:
            "Useful for accessing and repairing tall structures or equipment.",
        },
        {
          title: "Formwork Support",
          description:
            "Provides support for formwork in concrete construction, ensuring proper alignment and stability.",
        },
        {
          title: "Shoring",
          description:
            "Offers support for temporary structures and load-bearing during construction activities.",
        },
        {
          title: "Event Staging",
          description:
            "Suitable for constructing stages, viewing platforms, and other temporary structures for events and performances.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1672541298906-4aeb3edd3520?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  "Ringlock System": {
    title: "Ringlock System",
    description:
      "The Ringlock System is an advanced modular scaffolding system celebrated for its ease of use, stability, and versatility. Featuring a unique ring-and-lock design, this system allows for quick assembly and adjustment, making it ideal for a wide range of construction and industrial applications. The system comprises vertical standards, horizontal ledgers, and various other components that interlock through a ring-and-pin mechanism, providing a robust and secure scaffold structure.",
    keyFeatures: [
      {
        title: "Ring-and-Lock Mechanism",
        description:
          "The core feature of the Ringlock System is its ring-and-lock mechanism, where horizontal ledgers and diagonal braces lock into vertical standards using a circular ring and pin connection. This ensures quick and secure assembly.",
        icon: Lock,
      },
      {
        title: "Modular Design",
        description:
          "Highly modular, the Ringlock System includes components that can be easily combined and configured for different scaffold setups.",
        icon: Layers,
      },
      {
        title: "Adjustability",
        description:
          "Allows for easy height and width adjustments, accommodating various project requirements and site conditions.",
        icon: Wrench,
      },
      {
        title: "Versatility",
        description:
          "Suitable for a range of applications, including access scaffolding, formwork support, and shoring.",
        icon: Repeat,
      },
      {
        title: "Durability",
        description:
          "Made from high-strength steel, the components offer durability and resistance to heavy loads and harsh environments.",
        icon: Shield,
      },
      {
        title: "Ease of Assembly",
        description:
          "The design facilitates fast assembly and disassembly, reducing labour time and increasing efficiency on site.",
        icon: Zap,
      },
    ],
    technical: {
      image:
        "https://images.unsplash.com/photo-1519143009590-e3800b9df468?q=80&w=3184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      accordions: [
        {
          title: "Ringlock Base Collar",
          description:
            "The Starter/Base collar is the beginning vertical member of the Ringlock Scaffolding system. It sits upon a fixed or adjustable base.",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG)"],
            rows: [["GIRBC", "0.18", "1.25"]],
          },
        },
        {
          title: "Ringlock Vertical",
          description:
            "Standards are the vertical members of Ringlock Scaffolding. The standard provides the vertical support for scaffolding. The spigot is permanently fixed in place.",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG)"],
            rows: [
              ["MSRV500", "500", "2.30"],
              ["MSRV1000", "1000", "4.50"],
              ["MSRV1500", "1500", "7.00"],
              ["MSRV2000", "2000", "9.20"],
              ["MSRV2500", "2500", "11.50"],
              ["MSRV3000", "3000", "13.80"],
            ],
          },
        },
        {
          title: "Ringlock Ledger",
          description:
            "Horizontal bars that connect between standards to provide stability and support for the working platform.",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG)"],
            rows: [
              ["MSRLO500", "500", "2.50"],
              ["MSRLO1000", "1000", "4.30"],
              ["MSRLO1200", "1200", "5.00"],
              ["MSRLO1500", "1500", "5.75"],
              ["MSRLO2000", "2000", "7.50"],
              ["MSRLO2500", "2500", "9.00"],
            ],
          },
        },
      ],
    },
    benefits: [
      {
        title: "Enhanced Safety",
        description:
          "The secure ring-and-lock connection reduces the risk of instability and collapse, improving overall safety on site.",
        icon: ShieldCheck,
      },
      {
        title: "Increased Efficiency",
        description:
          "Quick and easy assembly and disassembly minimize construction time and labour costs, making it a cost-effective choice.",
        icon: Timer,
      },
      {
        title: "Flexibility",
        description:
          "The modular and adjustable nature allows for customization to fit various project requirements and building types.",
        icon: Settings,
      },
      {
        title: "Reduced Inventory Needs",
        description:
          "Standardized components reduce the need for a large inventory of different parts, simplifying logistics and storage.",
        icon: Package,
      },
      {
        title: "High Load Capacity",
        description:
          "Supports substantial loads, making it suitable for heavy-duty applications and ensuring structural integrity.",
        icon: Weight,
      },
    ],
    products: [
      {
        name: "Standards",
        description:
          "Vertical posts that provide the primary support for the scaffold. They are equipped with circular rings at regular intervals for the attachment of horizontal and diagonal components.",
        image: "/scaffolding/ringlock_system/standards.png",
      },
      {
        name: "Ledgers",
        description:
          "Horizontal bars that connect between standards to provide stability and support for the working platform.",
        image: "/scaffolding/ringlock_system/ledgers.png",
      },
      {
        name: "Braces",
        description:
          "Diagonal members that add stability and prevent swaying or buckling of the scaffold structure.",
        image: "/scaffolding/ringlock_system/braces.png",
      },
      {
        name: "Base Plates",
        description:
          "Plates placed at the bottom of the standards to distribute loads evenly and provide stability on uneven surfaces.",
        image: "/scaffolding/ringlock_system/base_plates.png",
      },
      {
        name: "Couplers",
        description:
          "Connectors used to secure horizontal ledgers and diagonal braces to the vertical standards.",
        image: "/scaffolding/ringlock_system/couplers.png",
      },
      {
        name: "Decking",
        description:
          "Platforms or boards used to create the working surface on the scaffold, available in various materials such as wood or metal.",
        image: "/scaffolding/ringlock_system/decking.png",
      },
      {
        name: "Adjustable Base Jacks",
        description:
          "Provide height adjustments for standards to accommodate uneven ground and ensure a level scaffold.",
        image: "/scaffolding/ringlock_system/base_jacks.png",
      },
    ],
    applications: {
      points: [
        {
          title: "Construction Sites",
          description:
            "Ideal for general construction, including residential, commercial, and industrial buildings. Useful for both high-rise and low-rise projects.",
        },
        {
          title: "Formwork Support",
          description:
            "Provides support for formwork in concrete construction, ensuring proper alignment and stability during curing.",
        },
        {
          title: "Maintenance and Repair",
          description:
            "Useful for accessing and working on tall structures, including buildings, bridges, and industrial equipment.",
        },
        {
          title: "Shoring",
          description:
            "Offers temporary support for structures or elements during construction or renovation activities.",
        },
        {
          title: "Event Staging",
          description:
            "Suitable for constructing stages, viewing platforms, and other temporary structures for events and performances.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1602346602123-b3cde15fae38?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  "H Frame System": {
    title: "H Frame System",
    description:
      "The H Frame System is a widely used scaffolding system in construction and maintenance projects. Known for its stability and robust structure, this system features pre-fabricated H-shaped frames that provide reliable support for work platforms. The H Frame System is celebrated for its straightforward assembly and dependable performance, making it a preferred choice for both small and large-scale projects.",
    keyFeatures: [
      {
        title: "H-Shaped Frames",
        description:
          "The system utilizes vertical and horizontal frames shaped like the letter 'H,' providing a stable and self-supporting structure.",
        icon: Frame,
      },
      {
        title: "Modular Design",
        description:
          "Components are modular, allowing for easy configuration and customization based on project needs.",
        icon: Layers,
      },
      {
        title: "Adjustable Components",
        description:
          "The system includes adjustable features such as base jacks and adjustable ledgers to accommodate uneven ground and different working heights.",
        icon: Wrench,
      },
      {
        title: "Interlocking Mechanism",
        description:
          "Frames are designed to interlock securely with each other, enhancing stability and preventing movement.",
        icon: Lock,
      },
      {
        title: "Versatility",
        description:
          "Suitable for a wide range of applications, including both vertical and horizontal access.",
        icon: Repeat,
      },
      {
        title: "Ease of Assembly",
        description:
          "Frames and components are designed for quick assembly and disassembly, reducing setup time and labour costs.",
        icon: Zap,
      },
    ],
    technical: {
      image:
        "https://plus.unsplash.com/premium_photo-1693183040602-b8f29c4ca4ac?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      accordions: [
        {
          title: "H Frame With Ladder",
          description: "H Frame with integrated ladder for easy access.",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG)"],
            rows: [["MSHF2000X1000L", "2000 x 1000", "23.00"]],
          },
        },
        {
          title: "H Frame Without Ladder",
          description: "Standard H Frame without ladder.",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG)"],
            rows: [["MSHF2000X1000", "2000 x 1000", "20.00"]],
          },
        },
        {
          title: "Cross Bracing",
          description: "Diagonal bracing for added stability.",
          table: {
            headers: ["ITEM CODE", "SIZE (Mtr)", "WEIGHT (KG)"],
            rows: [
              ["MSCB2", "2 mtr", "6.50"],
              ["MSCB2.5", "2.5 mtr", "7.50"],
            ],
          },
        },
        {
          title: "GI Plank With Hook",
          description: "Galvanized iron plank with hook for platform support.",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG)"],
            rows: [
              ["GIPL1500X225X38X1.6H", "1500x225", "8.50"],
              ["GIPL2000X225X38X1.6H", "2000x225", "11.50"],
              ["GIPL2500X225X38X1.6H", "2500x225", "14.00"],
            ],
          },
        },
        {
          title: "MS Plank Without Hook",
          description: "Mild steel plank without hook for platform support.",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG)"],
            rows: [
              ["MSPL1500X225X38X1.6", "1500x225", "7.00"],
              ["MSPL2000X225X38X1.6WT", "2000x225", "10.00"],
              ["MSPL2500X225X38X1.6H", "2500x225", "12.50"],
            ],
          },
        },
        {
          title: "MS Jali",
          description: "Steel mesh platform for additional safety.",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG)"],
            rows: [
              ["MSJL8FTX1FT", "2400x300", "16.00"],
              ["MSJL3000X300X1.6", "3000x300", "19.50"],
            ],
          },
        },
      ],
    },
    benefits: [
      {
        title: "Enhanced Stability",
        description:
          "The H-shaped frames provide a stable and rigid structure, reducing the risk of scaffold collapse and ensuring safety for workers.",
        icon: ShieldCheck,
      },
      {
        title: "Ease of Use",
        description:
          "The straightforward design allows for fast and efficient assembly and disassembly, which can lower labour costs and construction time.",
        icon: Zap,
      },
      {
        title: "Flexibility",
        description:
          "The modular design enables easy adjustments and configuration to fit various project requirements and site conditions.",
        icon: Settings,
      },
      {
        title: "Cost-Effective",
        description:
          "Reduces the need for extensive inventory and specialized components, leading to lower overall costs.",
        icon: DollarSign,
      },
    ],
    products: [
      {
        name: "H Frames",
        description:
          "The main structural components, featuring vertical posts and horizontal crossbars arranged in an “H” shape. These frames form the backbone of the scaffold system.",
        image: "/scaffolding/h_frame_system/h_frames.png",
      },
      {
        name: "Base Plates",
        description:
          "Placed at the bottom of the frames to distribute the load evenly and provide stability on uneven surfaces.",
        image: "/scaffolding/h_frame_system/base_plates.png",
      },
      {
        name: "Braces",
        description:
          "Diagonal components that add rigidity to the scaffold, preventing swaying or buckling and enhancing overall stability.",
        image: "/scaffolding/h_frame_system/braces.png",
      },
      {
        name: "Platform Boards",
        description:
          "Platform boards or decking that provide a working surface. These can be made of wood, metal, or composite materials.",
        image: "/scaffolding/h_frame_system/platform_boards.png",
      },
      {
        name: "Adjustable Jacks",
        description:
          "Used to adjust the height of the frames and ensure the scaffold is level, especially on uneven ground.",
        image: "/scaffolding/h_frame_system/adjustable_jacks.png",
      },
    ],
    applications: {
      points: [
        {
          title: "Construction Sites",
          description:
            "Suitable for use in both residential and commercial construction projects, including high-rise buildings and low-rise structures.",
        },
        {
          title: "Maintenance and Repair",
          description:
            "Ideal for accessing and working on existing structures, such as buildings, bridges, and industrial equipment.",
        },
        {
          title: "Formwork Support",
          description:
            "Provides support for formwork in concrete construction, ensuring proper alignment and stability during the curing process.",
        },
        {
          title: "Industrial Applications",
          description:
            "Used for maintenance, inspection, and access in industrial settings, including factories and warehouses.",
        },
        {
          title: "Event Staging",
          description:
            "Can be used to construct temporary stages, viewing platforms, and other structures for events and performances.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1632509931509-c00fcbc72dad?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  "Tube Fitting System": {
    title: "Tube Fitting System",
    description:
      "The Tube Fitting System, also known as Tube and Clamp Scaffolding, is a traditional and versatile scaffolding system that utilizes tubular steel pipes and couplers (clamps) to create a robust scaffold structure. Renowned for its flexibility and adaptability, this system allows for custom configurations and adjustments to meet diverse construction needs. It comprises vertical tubes, horizontal tubes, and couplers that connect the tubes at various angles, forming a stable scaffold framework.",
    keyFeatures: [
      {
        title: "Modular Design",
        description:
          "The system is highly modular, allowing for various configurations and adjustments based on project requirements.",
        icon: Layers,
      },
      {
        title: "Adjustability",
        description:
          "Offers a high degree of adjustability, with the ability to easily modify the scaffold height and layout by repositioning tubes and couplers.",
        icon: Wrench,
      },
      {
        title: "Versatility",
        description:
          "Can be used in a wide range of applications, including complex or irregular structures, due to its flexible design.",
        icon: Repeat,
      },
      {
        title: "Load-Bearing Capacity",
        description:
          "Capable of supporting significant loads, making it suitable for heavy-duty applications.",
        icon: Shield,
      },
      {
        title: "Durable Components",
        description:
          "Made from high-strength steel, the system provides durability and resistance to wear and environmental conditions.",
        icon: Shield,
      },
      {
        title: "Customization",
        description:
          "Allows for custom scaffold setups, accommodating various shapes, heights, and load requirements.",
        icon: Settings,
      },
    ],
    technical: null,
    benefits: [
      {
        title: "Flexibility",
        description:
          "The ability to adjust and customize the scaffold structure makes it suitable for a wide variety of construction scenarios and complex building designs.",
        icon: Repeat,
      },
      {
        title: "Cost-Effectiveness",
        description:
          "While it requires more manual assembly compared to some modular systems, the flexibility and reusability of components can lead to cost savings on projects.",
        icon: DollarSign,
      },
      {
        title: "Stability",
        description:
          "Provides a stable and secure scaffold structure when properly assembled, with the couplers offering strong connections between tubes.",
        icon: Shield,
      },
      {
        title: "Adaptability",
        description:
          "Suitable for use on uneven ground and in confined or irregular spaces, making it versatile for different site conditions.",
        icon: Wrench,
      },
      {
        title: "Reusability",
        description:
          "Components can be reused across multiple projects, increasing the system's overall cost-effectiveness and sustainability.",
        icon: RefreshCw,
      },
    ],
    products: [
      {
        name: "Tubes",
        description:
          "Vertical tubes are the primary support elements of the scaffold structure, positioned at regular intervals to bear the load effectively. Horizontal tubes connect these vertical pipes, providing stability and support for the working platform, ensuring a robust and secure scaffolding system.",
        image: "/scaffolding/tube_fitting_system/tubes.png",
      },
      {
        name: "Couplers (Clamps)",
        description:
          "Devices used to connect the tubes at various angles. Types include Right-Angle Couplers, Swivel Couplers, and Putlog Couplers.",
        image: "/scaffolding/tube_fitting_system/couplers.png",
      },
      {
        name: "Base Plates",
        description:
          "Plates placed under the vertical tubes to distribute the load evenly and provide stability on uneven surfaces.",
        image: "/scaffolding/tube_fitting_system/base_plates.png",
      },
      {
        name: "Decking",
        description:
          "Platforms or boards that create the working surface on the scaffold. These can be made from wood, metal, or composite materials.",
        image: "/scaffolding/tube_fitting_system/decking.png",
      },
    ],
    applications: {
      points: [
        {
          title: "Construction Sites",
          description:
            "Widely used in residential, commercial, and industrial construction for both low-rise and high-rise buildings.",
        },
        {
          title: "Maintenance and Repair",
          description:
            "Ideal for accessing and working on existing structures such as buildings, bridges, and industrial equipment.",
        },
        {
          title: "Industrial Applications",
          description:
            "Used for maintenance, inspection, and access in industrial settings like factories, warehouses, and power plants.",
        },
        {
          title: "Event Staging",
          description:
            "Suitable for constructing temporary stages, viewing platforms, and other structures for events and performances.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1616945804679-697e9e5a6366?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  "Prop System": {
    title: "Prop System",
    description:
      "The Prop System, also known as adjustable props or shoring props, is a versatile scaffolding solution designed to provide temporary support to structural elements during construction or renovation. This system is ideal for supporting formwork, slabs, beams, and other structural components until the concrete or construction material has fully cured and can independently bear the load. The Prop System is highly adjustable, allowing for precise height modifications to accommodate varying site conditions and construction requirements.",
    keyFeatures: [
      {
        title: "Adjustable Height",
        description:
          "The props feature telescopic sections that enable easy height adjustments, making them versatile for supporting various heights and configurations.",
        icon: ArrowUpDown,
      },
      {
        title: "Load-Bearing Capacity",
        description:
          "Engineered to support significant loads, making them suitable for heavy-duty applications such as supporting concrete slabs and beams.",
        icon: Weight,
      },
      {
        title: "Durable Construction",
        description:
          "Typically made from high-strength steel, ensuring durability and resistance to heavy loads and harsh environmental conditions.",
        icon: Shield,
      },
      {
        title: "Ease of Use",
        description:
          "The simple design and operation facilitate quick adjustment and installation, reducing setup time and labour costs.",
        icon: Zap,
      },
      {
        title: "Safety Features",
        description:
          "Includes locking mechanisms to secure the prop in place, preventing accidental collapse or movement.",
        icon: Lock,
      },
      {
        title: "Modular System",
        description:
          "Can be used in conjunction with other scaffolding components and systems, allowing for flexible and customizable setups.",
        icon: Layers,
      },
    ],
    technical: {
      image:
        "https://images.unsplash.com/photo-1637441212098-baef320ab80b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      accordions: [
        {
          title: "MS Props (Light Duty)",
          description: "Light duty adjustable props for temporary support.",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG)"],
            rows: [
              ["MSPRB1.5X1.5SL", "1500x1500", "11.20"],
              ["MSPRB2X2SL", "2000x2000", "14.10"],
              ["MSPRB2X2.5SL", "2000x2500", "15.60"],
              ["MSPRB2X3SL", "2000x3000", "17.10"],
            ],
          },
        },
        {
          title: "MS Props (Medium Duty)",
          description: "Medium duty adjustable props for greater load support.",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG)"],
            rows: [
              ["MSPRB1.5X1.5S", "1500x1500", "14.50"],
              ["MSPRB2X2S", "2000x2000", "18.50"],
              ["MSPRB2X2.5P", "2000x2500", "20.00"],
              ["MSPRB2X3P", "2000x3000", "22.00"],
              ["MSPRB3X3S", "3000x3000", "26.50"],
            ],
          },
        },
        {
          title: "MS Props (Heavy Duty)",
          description: "Heavy duty adjustable props for maximum load support.",
          table: {
            headers: ["ITEM CODE", "SIZE (MM)", "WEIGHT (KG)"],
            rows: [
              ["MSPRB1.5X1.5SH", "1500x1500", "15.90"],
              ["MSPRB2X2SH", "2000x2000", "20.10"],
              ["MSPRB2X2.5SH", "2000x2500", "21.90"],
              ["MSPRB2X3SH", "2000x3000", "23.70"],
              ["MSPRB3X3SH", "3000x3000", "28.70"],
              ["MSPRB1.5X1.5SEH", "1500x1500", "18.00"],
              ["MSPRB2X2SEH", "2000x2000", "23.00"],
              ["MSPRB2X2.5SEH", "2000x2500", "25.20"],
              ["MSPRB2X3SEH", "2000x3000", "27.40"],
              ["MSPRB3X3SEH", "3000x3000", "33.00"],
            ],
          },
        },
      ],
    },
    benefits: [
      {
        title: "Versatility",
        description:
          "Suitable for a wide range of applications, from supporting formwork in concrete construction to stabilizing temporary structures.",
        icon: Repeat,
      },
      {
        title: "Efficiency",
        description:
          "Quick and easy to set up and adjust, speeding up the construction process and reducing labour time.",
        icon: Zap,
      },
      {
        title: "Cost-Effectiveness",
        description:
          "Durable and reusable, which can lower overall costs by reducing the need for frequent replacements and minimizing waste.",
        icon: DollarSign,
      },
      {
        title: "Safety",
        description:
          "Provides stable and reliable support for structural elements, reducing the risk of collapse or instability during construction.",
        icon: Shield,
      },
      {
        title: "Flexibility",
        description:
          "Adjustable height and modular design make it adaptable to different construction needs and site conditions.",
        icon: Wrench,
      },
    ],
    products: [
      {
        name: "Props (Shoring Props)",
        description:
          "The main vertical components of the system, featuring telescopic tubes that can be adjusted to different heights. They typically consist of an outer tube and an inner tube, with a mechanism for extending and locking the inner tube.",
        image: "/scaffolding/prop_system/props.png",
      },
      {
        name: "Base Plates",
        description:
          "Plates placed at the bottom of the props to distribute the load evenly and provide stability on uneven surfaces.",
        image: "/scaffolding/prop_system/base_plates.png",
      },
      {
        name: "Adjustable Head (Top Plate)",
        description:
          "The component at the top of the prop that makes contact with the formwork or structural element being supported. It often includes a mechanism for fine adjustments.",
        image: "/scaffolding/prop_system/adjustable_head.png",
      },
      {
        name: "Locking Mechanism",
        description:
          "Devices that secure the telescopic sections of the prop in place to prevent accidental movement. Common types include pin-and-hole systems, screw threads, or clamps.",
        image: "/scaffolding/prop_system/locking_mechanism.png",
      },
      {
        name: "Extension Tubes",
        description:
          "Additional sections that can be added to increase the height range of the prop, allowing for greater flexibility in supporting different heights.",
        image: "/scaffolding/prop_system/extension_tubes.png",
      },
    ],
    applications: {
      points: [
        {
          title: "Concrete Construction",
          description:
            "Used to support formwork for concrete slabs, beams, and walls until the concrete sets and gains sufficient strength.",
        },
        {
          title: "Structural Support",
          description:
            "Provides temporary support for structural elements during renovations, repairs, or construction of new buildings.",
        },
        {
          title: "Shoring",
          description:
            "Used to stabilize and support temporary structures or elements that need additional support during construction or modification.",
        },
        {
          title: "Industrial Maintenance",
          description:
            "Applied in industrial settings to support and stabilize components or structures during maintenance or repair work.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1682803262508-af2f086b7e3a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
};
