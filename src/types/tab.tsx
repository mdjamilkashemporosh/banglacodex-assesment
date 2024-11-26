export type TabItem = {
    label: string;
    content: React.ReactNode;
    icon: React.ReactNode;
};

export type TabsProps = {
    tabs: TabItem[];
};