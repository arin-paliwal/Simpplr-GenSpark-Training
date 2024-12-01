export interface TabProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    tabId: string;
    icon: React.ReactNode;
    label: string;
  }