
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { Podcast } from '@/types/admin';

interface PodcastsTabProps {
  podcasts: Podcast[];
  onEdit: (podcast: Podcast) => void;
  onDelete: (id: number) => void;
}

const PodcastsTab = ({ podcasts, onEdit, onDelete }: PodcastsTabProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Manage Podcasts</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-800">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Title</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Description</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">YouTube URL</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {podcasts.map((podcast) => (
              <tr key={podcast.id}>
                <td className="px-4 py-4 whitespace-nowrap">{podcast.title}</td>
                <td className="px-4 py-4 truncate max-w-xs">{podcast.description}</td>
                <td className="px-4 py-4 whitespace-nowrap truncate max-w-xs">{podcast.youtubeUrl}</td>
                <td className="px-4 py-4 whitespace-nowrap space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-blue-400 hover:text-blue-300"
                    onClick={() => onEdit(podcast)}
                  >
                    <Pencil className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-400 hover:text-red-300"
                    onClick={() => onDelete(podcast.id)}
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

export default PodcastsTab;
