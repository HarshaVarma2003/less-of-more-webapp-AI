
import { TABS, TabType } from '@/types/admin';

interface TabsNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const TabsNav = ({ activeTab, setActiveTab }: TabsNavProps) => {
  return (
    <div className="mb-8">
      <div className="border-b border-gray-800 flex overflow-x-auto">
        <button
          className={`py-3 px-6 -mb-px ${
            activeTab === TABS.FELLOWSHIPS 
              ? 'border-b-2 border-lom-yellow text-lom-yellow'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab(TABS.FELLOWSHIPS)}
        >
          Fellowships
        </button>
        <button
          className={`py-3 px-6 -mb-px ${
            activeTab === TABS.ACTIVITIES 
              ? 'border-b-2 border-lom-yellow text-lom-yellow'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab(TABS.ACTIVITIES)}
        >
          Activities
        </button>
        <button
          className={`py-3 px-6 -mb-px ${
            activeTab === TABS.PODCASTS 
              ? 'border-b-2 border-lom-yellow text-lom-yellow'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab(TABS.PODCASTS)}
        >
          Podcasts
        </button>
      </div>
    </div>
  );
};

export default TabsNav;
