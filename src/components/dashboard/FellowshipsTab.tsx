
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { Fellowship } from '@/types/admin';

interface FellowshipsTabProps {
  fellowships: Fellowship[];
  onEdit: (fellowship: Fellowship) => void;
  onDelete: (id: number) => void;
}

const FellowshipsTab = ({ fellowships, onEdit, onDelete }: FellowshipsTabProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Manage Fellowships</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-800">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Title</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Organization</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Duration</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Stipend</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {fellowships.map((fellowship) => (
              <tr key={fellowship.id}>
                <td className="px-4 py-4 whitespace-nowrap">{fellowship.title}</td>
                <td className="px-4 py-4 whitespace-nowrap">{fellowship.organization}</td>
                <td className="px-4 py-4 whitespace-nowrap">{fellowship.duration}</td>
                <td className="px-4 py-4 whitespace-nowrap">{fellowship.stipend}</td>
                <td className="px-4 py-4 whitespace-nowrap space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-blue-400 hover:text-blue-300"
                    onClick={() => onEdit(fellowship)}
                  >
                    <Pencil className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-400 hover:text-red-300"
                    onClick={() => onDelete(fellowship.id)}
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

export default FellowshipsTab;
