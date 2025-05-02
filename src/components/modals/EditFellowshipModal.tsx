
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';

interface Fellowship {
  id: number;
  title: string;
  organization: string;
  about?: string;
  responsibilities?: string;
  eligibility?: string;
  image: string;
  stipend: string;
  duration: string;
  location?: string;
  website?: string;
}

interface EditFellowshipModalProps {
  fellowship: Fellowship;
  onClose: () => void;
  onSave: (updatedFellowship: Fellowship) => void;
}

const EditFellowshipModal = ({ fellowship, onClose, onSave }: EditFellowshipModalProps) => {
  const [formData, setFormData] = useState<Fellowship>({
    ...fellowship,
    about: fellowship.about || '',
    responsibilities: fellowship.responsibilities || '',
    eligibility: fellowship.eligibility || '',
    location: fellowship.location || '',
    website: fellowship.website || ''
  });

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
      <div className="bg-gray-900 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto text-gray-200">
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">Edit Fellowship</h2>
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
            <Label htmlFor="organization" className="text-gray-200">Offered By</Label>
            <Input 
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              className="bg-gray-800 text-gray-200 border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="about" className="text-gray-200">What is it about?</Label>
            <Textarea 
              id="about"
              name="about"
              value={formData.about}
              onChange={handleChange}
              rows={3}
              className="bg-gray-800 text-gray-200 border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="responsibilities" className="text-gray-200">What will the fellow do?</Label>
            <Textarea 
              id="responsibilities"
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              rows={3}
              className="bg-gray-800 text-gray-200 border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="eligibility" className="text-gray-200">Eligibility</Label>
            <Textarea 
              id="eligibility"
              name="eligibility"
              value={formData.eligibility}
              onChange={handleChange}
              rows={3}
              className="bg-gray-800 text-gray-200 border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image" className="text-gray-200">Image URL</Label>
            <Input 
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="bg-gray-800 text-gray-200 border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration" className="text-gray-200">Duration</Label>
            <Input 
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="bg-gray-800 text-gray-200 border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="stipend" className="text-gray-200">Stipend</Label>
            <Input 
              id="stipend"
              name="stipend"
              value={formData.stipend}
              onChange={handleChange}
              required
              className="bg-gray-800 text-gray-200 border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-gray-200">Location</Label>
            <Input 
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="bg-gray-800 text-gray-200 border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website" className="text-gray-200">Website Link</Label>
            <Input 
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
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

export default EditFellowshipModal;
