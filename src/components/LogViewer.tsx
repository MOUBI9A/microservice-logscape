
import React, { useState } from 'react';
import { Search, Filter, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';

interface Log {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error' | 'success';
  message: string;
  source: string;
}

const sampleLogs: Log[] = [
  {
    id: '1',
    timestamp: '2024-03-14 10:30:45',
    level: 'info',
    message: 'Application started successfully',
    source: 'system',
  },
  {
    id: '2',
    timestamp: '2024-03-14 10:31:15',
    level: 'warning',
    message: 'High memory usage detected',
    source: 'monitoring',
  },
  {
    id: '3',
    timestamp: '2024-03-14 10:32:00',
    level: 'error',
    message: 'Failed to connect to database',
    source: 'database',
  },
  {
    id: '4',
    timestamp: '2024-03-14 10:32:30',
    level: 'success',
    message: 'Backup completed successfully',
    source: 'backup',
  },
];

export const LogViewer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string>('all');

  const filteredLogs = sampleLogs.filter(log => {
    if (filter !== 'all' && log.level !== filter) return false;
    return log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
           log.source.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'info': return 'bg-log-info';
      case 'warning': return 'bg-log-warning';
      case 'error': return 'bg-log-error';
      case 'success': return 'bg-log-success';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search logs..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <select
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Levels</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
            <option value="success">Success</option>
          </select>
          <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all">
            <RefreshCcw size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredLogs.map((log) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${getLevelColor(log.level)}`} />
              <span className="text-sm text-gray-500">{log.timestamp}</span>
              <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">{log.source}</span>
            </div>
            <p className="mt-2 text-gray-700">{log.message}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LogViewer;
