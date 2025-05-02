
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';

interface Podcast {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
}

interface EditPodcastModalProps {
  podcast: Podcast;
  onClose: () => void;
  onSave: (updatedPodcast: Podcast) => void;
}

const EditPodcastModal = ({ podcast, onClose, onSave }: EditPodcastModalProps) => {
  const [formData, setFormData] = useState<Podcast>({...podcast});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">Edit Podcast</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gray-200">Title</Label>
            <Input 
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="bg-gray-800 text-gray-200 border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-200">Description</Label>
            <Textarea 
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="min-h-24 bg-gray-800 text-gray-200 border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="thumbnail" className="text-gray-200">Thumbnail URL</Label>
            <Input 
              id="thumbnail"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              required
              className="bg-gray-800 text-gray-200 border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="youtubeUrl" className="text-gray-200">YouTube URL</Label>
            <Input 
              id="youtubeUrl"
              name="youtubeUrl"
              value={formData.youtubeUrl}
              onChange={handleChange}
              required
              className="bg-gray-800 text-gray-200 border-gray-700"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPodcastModal;
