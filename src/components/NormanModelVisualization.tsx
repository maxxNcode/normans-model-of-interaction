import React, { useState, useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Position,
  type NodeProps,
  Handle,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge
} from 'reactflow';
import type { Node, Edge, NodeChange, EdgeChange, Connection } from 'reactflow';
import 'reactflow/dist/style.css';
import './NormanModelVisualization.css';

const executionStages = [2, 3, 4];
const evaluationStages = [5, 6, 7];

const CustomNode = ({ data, selected }: NodeProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [isHovered, setIsHovered] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    data.title = title;
    data.description = description;
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(data.title);
    setDescription(data.description);
    setIsEditing(false);
  };

  return (
    <div 
      className={`custom-node ${selected ? 'selected' : ''} ${executionStages.includes(data.id) ? 'execution' : ''} ${evaluationStages.includes(data.id) ? 'evaluation' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="target" position={Position.Left} id="left" />
      <Handle type="target" position={Position.Right} id="right" />
      <Handle type="target" position={Position.Bottom} id="bottom" />
      
      <Handle type="source" position={Position.Top} id="top-source" />
      <Handle type="source" position={Position.Left} id="left-source" />
      <Handle type="source" position={Position.Right} id="right-source" />
      <Handle type="source" position={Position.Bottom} id="bottom-source" />
      
      {isEditing ? (
        <div className="node-edit-form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="node-title-input"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="node-description-input"
          />
          <div className="node-edit-buttons">
            <button onClick={handleSave} className="save-btn">Save</button>
            <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          </div>
        </div>
      ) : (
        <div className="node-content">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          {isHovered && (
            <button onClick={handleEdit} className="edit-node-btn">Edit</button>
          )}
        </div>
      )}
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const getNodes = (): Node[] => [
  {
    id: '1',
    type: 'custom',
    position: { x: 500, y: 0 },
    data: { id: 1, title: "Establish the Goal", description: "The user decides what they want to achieve." }
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 750, y: 150 },
    data: { id: 2, title: "Formulate Intention", description: "The user decides on the plan of action to reach the goal." }
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 750, y: 350 },
    data: { id: 3, title: "Specify Action Sequence", description: "The user translates their intention into a specific sequence of actions for the interface." }
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 500, y: 500 },
    data: { id: 4, title: "Execute Action", description: "The user performs the actions on the system interface." }
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 250, y: 350 },
    data: { id: 5, title: "Perceive System State", description: "The user observes the system to see what has happened as a result of their action." }
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 250, y: 150 },
    data: { id: 6, title: "Interpret System State", description: "The user makes sense of the system's response." }
  },
  {
    id: '7',
    type: 'custom',
    position: { x: 500, y: 100 },
    data: { id: 7, title: "Evaluate System State", description: "The user compares the perceived and interpreted system state to their original goal, deciding if it was achieved." }
  }
];

const getEdges = (): Edge[] => [
  // Removed default edges to allow users to create their own connections
];

const NormanModelVisualization: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>(getNodes());
  const [edges, setEdges] = useState<Edge[]>(getEdges());

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  return (
    <div className="norman-model-container">
      <h1 className="title">Norman's Model of Interaction</h1>
      <p className="subtitle">The Execution-Evaluation Cycle in Human-Computer Interaction</p>
      
      <div className="model-diagram">
        <div className="react-flow-container">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            attributionPosition="bottom-left"
            nodesDraggable={true}
            nodesConnectable={true}
            elementsSelectable={true}
            connectOnClick={true}
          >
            <Background color="#aaa" gap={16} />
            <Controls />
          </ReactFlow>
        </div>
      </div>
      
      {/* Key Concepts */}
      <div className="key-concepts">
        <h2>Key Concepts</h2>
        <div className="concepts-container">
          <div className="concept">
            <h3>Mental Models</h3>
            <p>Users have their own mental models of how a system should work.</p>
          </div>
          <div className="concept">
            <h3>Gulfs of Execution and Evaluation</h3>
            <p>Problems arise when there is a gap between the user's mental model and the system's actual functioning.</p>
          </div>
          <div className="concept">
            <h3>Mapping</h3>
            <p>A good design ensures a clear and intuitive mapping between the user's intended actions and the system's actual operations.</p>
          </div>
          <div className="concept">
            <h3>Feedback</h3>
            <p>Users need to receive immediate and understandable feedback from the system to effectively evaluate the outcome of their actions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormanModelVisualization;