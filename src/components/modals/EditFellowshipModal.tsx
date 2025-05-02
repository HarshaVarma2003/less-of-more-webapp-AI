
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

interface Fellowship {
  id: number;
  title: string;
  organization: string;
  image: string;
  stipend: string;
  duration: string;
}

interface EditFellowshipModalProps {
  fellowship: Fellowship;
  onClose: () => void;
  onSave: (updatedFellowship: Fellowship) => void;
}

const EditFellowshipModal = ({ fellowship, onClose, onSave }: EditFellowshipModalProps) => {
  const [formData, setFormData] = useState<Fellowship>({...fellowship});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <h2 className="text-xl font-semibold">Edit Fellowship</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input 
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization</Label>
            <Input 
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input 
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Input 
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="stipend">Stipend</Label>
            <Input 
              id="stipend"
              name="stipend"
              value={formData.stipend}
              onChange={handleChange}
              required
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

export default EditFellowshipModal;
