
import React, { useState } from 'react';
import { Search, Filter, RefreshCcw, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Log {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error' | 'success';
  message: string;
  source: string;
  details?: string;
}

const sampleLogs: Log[] = [
  {
    id: '1',
    timestamp: '2024-03-14 10:30:45',
    level: 'info',
    message: 'Application started successfully',
    source: 'system',
    details: 'Server initialization completed with all services running properly',
  },
  {
    id: '2',
    timestamp: '2024-03-14 10:31:15',
    level: 'warning',
    message: 'High memory usage detected',
    source: 'monitoring',
    details: 'Memory usage exceeded 80% threshold. Consider optimizing resource allocation.',
  },
  {
    id: '3',
    timestamp: '2024-03-14 10:32:00',
    level: 'error',
    message: 'Failed to connect to database',
    source: 'database',
    details: 'Connection timeout after 30 seconds. Check database availability and network status.',
  },
  {
    id: '4',
    timestamp: '2024-03-14 10:32:30',
    level: 'success',
    message: 'Backup completed successfully',
    source: 'backup',
    details: 'Daily backup completed. Total size: 2.5GB. Compression ratio: 60%',
  },
];

export const LogViewer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string>('all');
  const [expandedLogs, setExpandedLogs] = useState<Set<string>>(new Set());

  const filteredLogs = sampleLogs.filter(log => {
    if (filter !== 'all' && log.level !== filter) return false;
    return log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
           log.source.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const toggleLogExpansion = (logId: string) => {
    const newExpandedLogs = new Set(expandedLogs);
    if (expandedLogs.has(logId)) {
      newExpandedLogs.delete(logId);
    } else {
      newExpandedLogs.add(logId);
    }
    setExpandedLogs(newExpandedLogs);
  };

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
    <div className="w-full max-w-7xl mx-auto space-y-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search logs..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-background border border-input hover:border-ring focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <select
            className="px-4 py-2 rounded-lg bg-background border border-input hover:border-ring focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all outline-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Levels</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
            <option value="success">Success</option>
          </select>
          <button className="p-2 rounded-lg border border-input hover:border-ring hover:bg-secondary transition-all">
            <RefreshCcw size={20} className="text-foreground" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {filteredLogs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div 
                className="p-4 cursor-pointer"
                onClick={() => toggleLogExpansion(log.id)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${getLevelColor(log.level)}`} />
                  <span className="text-sm text-muted-foreground">{log.timestamp}</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">{log.source}</span>
                  {expandedLogs.has(log.id) ? 
                    <ChevronUp className="ml-auto h-4 w-4 text-muted-foreground" /> : 
                    <ChevronDown className="ml-auto h-4 w-4 text-muted-foreground" />
                  }
                </div>
                <p className="mt-2 text-foreground">{log.message}</p>
              </div>
              <AnimatePresence>
                {expandedLogs.has(log.id) && log.details && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-2 border-t border-border/50 bg-secondary/50">
                      <p className="text-sm text-muted-foreground">{log.details}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LogViewer;
