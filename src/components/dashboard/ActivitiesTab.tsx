
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { Activity } from '@/types/admin';

interface ActivitiesTabProps {
  activities: Activity[];
  onEdit: (activity: Activity) => void;
  onDelete: (id: number) => void;
}

const ActivitiesTab = ({ activities, onEdit, onDelete }: ActivitiesTabProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Manage Activities</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-800">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Title</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Image URL</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Link</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td className="px-4 py-4 whitespace-nowrap">{activity.title}</td>
                <td className="px-4 py-4 whitespace-nowrap truncate max-w-xs">{activity.image}</td>
                <td className="px-4 py-4 whitespace-nowrap truncate max-w-xs">{activity.url}</td>
                <td className="px-4 py-4 whitespace-nowrap space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-blue-400 hover:text-blue-300"
                    onClick={() => onEdit(activity)}
                  >
                    <Pencil className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-400 hover:text-red-300"
                    onClick={() => onDelete(activity.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivitiesTab;
