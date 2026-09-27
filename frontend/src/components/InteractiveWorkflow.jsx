import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, Award, FileText, RefreshCw, Zap, Move } from 'lucide-react';

const INITIAL_NODES = [
  {
    id: 'mentee',
    role: '🎓 Mentee',
    title: 'Student Team Lead',
    color: 'from-blue-600 to-indigo-600',
    borderColor: 'border-blue-500',
    glowColor: 'shadow-blue-500/30',
    x: 50,
    y: 120,
    icon: UserCheck,
    status: 'PENDING_REVIEW',
    action: 'Submits Proposal & Deliverables',
    permissions: ['Create Proposal', 'Upload PDFs', 'Invite Members', 'Offline Sync'],
  },
  {
    id: 'mentor',
    role: '👨‍🏫 Mentor',
    title: 'Faculty Guide',
    color: 'from-emerald-600 to-teal-600',
    borderColor: 'border-emerald-500',
    glowColor: 'shadow-emerald-500/30',
    x: 320,
    y: 80,
    icon: ShieldCheck,
    status: 'MENTOR_APPROVED',
    action: 'Grades Rubric & Submits Feedback',
    permissions: ['View Assigned Teams', 'Grade Rubrics', 'Contextual Comments', 'Request Revisions'],
  },
  {
    id: 'coordinator',
    role: '📋 Coordinator',
    title: 'Department Coordinator',
    color: 'from-amber-600 to-orange-600',
    borderColor: 'border-amber-500',
    glowColor: 'shadow-amber-500/30',
    x: 590,
    y: 160,
    icon: FileText,
    status: 'COORDINATOR_VERIFIED',
    action: 'Verifies Roster & Faculty Allocation',
    permissions: ['Allocate Mentors', 'Set Academic Cycles', 'Generate Links', 'Batch Compliance'],
  },
  {
    id: 'hod',
    role: '🏛️ HOD',
    title: 'Head of Department',
    color: 'from-rose-600 to-pink-600',
    borderColor: 'border-rose-500',
    glowColor: 'shadow-rose-500/30',
    x: 860,
    y: 100,
    icon: Award,
    status: 'FULLY_APPROVED',
    action: 'Executes RPC Status Override & Sign-off',
    permissions: ['Department Analytics', 'RPC Status Override', 'NAAC Audit Export', 'Executive Approval'],
  },
];

const CONNECTIONS = [
  { from: 'mentee', to: 'mentor', label: '1. Proposal Payload' },
  { from: 'mentor', to: 'coordinator', label: '2. Rubric Marks' },
  { from: 'coordinator', to: 'hod', label: '3. Verified Roster' },
];

export default function InteractiveWorkflow() {
  const [nodes, setNodes] = useState(INITIAL_NODES);
  const [selectedNode, setSelectedNode] = useState(INITIAL_NODES[0]);
  const containerRef = useRef(null);

  const handleDrag = (id, info) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            x: Math.max(20, node.x + info.delta.x),
            y: Math.max(20, node.y + info.delta.y),
          };
        }
        return node;
      })
    );
  };

  const resetLayout = () => {
    setNodes(INITIAL_NODES);
  };

  const getNodeCenter = (nodeId) => {
    const node = nodes.find((n) => n.id === nodeId);
    if (!node) return { x: 0, y: 0 };
    return {
      x: node.x + 110, // approximate center width
      y: node.y + 60,  // approximate center height
    };
  };

  return (
    <div className="w-full bg-slate-950 text-white rounded-2xl p-6 border border-indigo-500/30 shadow-2xl overflow-hidden my-8">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-indigo-400 animate-pulse" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Interactive Academic Review Canvas
            </h2>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Click & drag character nodes freely to explore workflow connections and real-time state triggers.
          </p>
        </div>
        <button
          onClick={resetLayout}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/40 rounded-lg text-indigo-300 text-sm font-medium transition-all"
        >
          <RefreshCw className="w-4 h-4" /> Reset Layout
        </button>
      </div>

      {/* Canvas Area */}
      <div
        ref={containerRef}
        className="relative w-full h-[450px] bg-slate-900/60 rounded-xl my-6 border border-slate-800 overflow-hidden cursor-crosshair"
        style={{
          backgroundImage: 'radial-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        {/* Dynamic Connecting SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#6366f1" />
            </marker>
          </defs>
          {CONNECTIONS.map((conn) => {
            const start = getNodeCenter(conn.from);
            const end = getNodeCenter(conn.to);
            const midX = (start.x + end.x) / 2;
            const midY = (start.y + end.y) / 2;

            return (
              <g key={`${conn.from}-${conn.to}`}>
                <path
                  d={`M ${start.x} ${start.y} C ${start.x + 80} ${start.y}, ${end.x - 80} ${end.y}, ${end.x} ${end.y}`}
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="3"
                  strokeDasharray="6 4"
                  markerEnd="url(#arrow)"
                  className="transition-all duration-75"
                />
                <rect
                  x={midX - 50}
                  y={midY - 12}
                  width="100"
                  height="22"
                  rx="6"
                  fill="#0f172a"
                  stroke="#475569"
                  strokeWidth="1"
                />
                <text
                  x={midX}
                  y={midY + 3}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="10"
                  fontWeight="600"
                >
                  {conn.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Draggable Character Nodes */}
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = selectedNode?.id === node.id;

          return (
            <motion.div
              key={node.id}
              drag
              dragConstraints={containerRef}
              dragElastic={0.05}
              dragMomentum={false}
              onDrag={(e, info) => handleDrag(node.id, info)}
              onClick={() => setSelectedNode(node)}
              style={{ x: node.x, y: node.y }}
              className={`absolute z-10 w-56 p-4 rounded-xl border ${node.borderColor} bg-slate-900/90 backdrop-blur-md shadow-lg ${node.glowColor} cursor-grab active:cursor-grabbing transition-shadow ${
                isSelected ? 'ring-2 ring-indigo-400 scale-105' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${node.color} text-white`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                  <Move className="w-3.5 h-3.5" /> Drag
                </div>
              </div>

              <h3 className="text-base font-bold text-white">{node.role}</h3>
              <p className="text-xs text-slate-400 mb-3">{node.title}</p>

              <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800 text-[11px] font-mono text-indigo-300">
                <span className="text-slate-500">Trigger:</span> {node.status}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected Node Inspector Panel */}
      {selectedNode && (
        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-white">{selectedNode.role}</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Active Node Selection
              </span>
            </div>
            <p className="text-sm text-slate-300 mt-1">
              <strong className="text-indigo-400">Primary Duty:</strong> {selectedNode.action}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {selectedNode.permissions.map((perm, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-800 text-slate-200 border border-slate-700 rounded-md text-xs font-mono"
              >
                ✓ {perm}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
