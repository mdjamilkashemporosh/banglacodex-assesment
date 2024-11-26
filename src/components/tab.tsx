import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { TabsProps } from '../types/tab';

export default function Tabs({ tabs }: TabsProps) {
    return (
      <TabGroup>
        <TabList className="flex space-x-4 border-b border-gray-300">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `flex items-center py-2 px-4 font-medium text-sm ${
                  selected
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-600 hover:text-blue-500'
                }`
              }
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-4">
          {tabs.map((tab, index) => (
            <TabPanel key={index} className="p-4">
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    );
  }
