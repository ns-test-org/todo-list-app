'use client';

import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [blueTheme, setBlueTheme] = useState<'ocean' | 'sky' | 'professional'>('ocean');

  const addTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className={`min-h-screen py-12 px-4 transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : blueTheme === 'ocean'
          ? 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
          : blueTheme === 'sky'
            ? 'bg-gradient-to-br from-sky-50 via-white to-blue-50'
            : 'bg-gradient-to-br from-indigo-50 via-white to-blue-50'
    }`}>
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-30 blur-3xl transition-all duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50' 
            : blueTheme === 'ocean' 
              ? 'bg-gradient-to-br from-blue-200/60 to-cyan-200/60'
              : blueTheme === 'sky'
                ? 'bg-gradient-to-br from-sky-200/60 to-blue-200/60'
                : 'bg-gradient-to-br from-blue-300/40 to-indigo-300/40'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-30 blur-3xl transition-all duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-tr from-emerald-900/50 to-blue-900/50' 
            : blueTheme === 'ocean'
              ? 'bg-gradient-to-tr from-teal-200/60 to-blue-300/60'
              : blueTheme === 'sky'
                ? 'bg-gradient-to-tr from-cyan-200/60 to-sky-300/60'
                : 'bg-gradient-to-tr from-slate-200/40 to-blue-400/40'
        }`}></div>
      </div>

      <div className="relative max-w-lg mx-auto">
        {/* Header with Theme Controls */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-4">
            {/* Blue Theme Selector */}
            {!isDarkMode && (
              <div className="flex gap-2">
                <button
                  onClick={() => setBlueTheme('ocean')}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    blueTheme === 'ocean'
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  Ocean
                </button>
                <button
                  onClick={() => setBlueTheme('sky')}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    blueTheme === 'sky'
                      ? 'bg-sky-500 text-white shadow-md'
                      : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
                  }`}
                >
                  Sky
                </button>
                <button
                  onClick={() => setBlueTheme('professional')}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    blueTheme === 'professional'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                  }`}
                >
                  Pro
                </button>
              </div>
            )}
            {isDarkMode && <div></div>}
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? 'bg-slate-700/50 text-yellow-400 hover:bg-slate-600/50'
                  : 'bg-white/50 text-slate-600 hover:bg-white/80'
              } backdrop-blur-sm border ${
                isDarkMode ? 'border-slate-600/50' : 'border-white/20'
              } shadow-lg`}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
          <h1 className={`text-4xl font-bold mb-2 transition-all duration-500 ${
            isDarkMode
              ? 'bg-gradient-to-r from-slate-200 via-white to-slate-200 bg-clip-text text-transparent'
              : blueTheme === 'ocean'
                ? 'bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent'
                : blueTheme === 'sky'
                  ? 'bg-gradient-to-r from-sky-700 via-sky-600 to-blue-600 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-indigo-700 via-blue-700 to-blue-600 bg-clip-text text-transparent'
          }`}>
            Tasks
          </h1>
          <p className={`text-sm font-medium transition-colors duration-500 ${
            isDarkMode 
              ? 'text-slate-400' 
              : blueTheme === 'ocean'
                ? 'text-blue-600'
                : blueTheme === 'sky'
                  ? 'text-sky-600'
                  : 'text-indigo-600'
          }`}>Stay organized, stay productive</p>
        </div>

        {/* Main card */}
        <div className={`backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 ${
          isDarkMode
            ? 'bg-slate-800/80 border border-slate-700/50'
            : blueTheme === 'ocean'
              ? 'bg-white/90 border border-blue-200/50 shadow-blue-100/50'
              : blueTheme === 'sky'
                ? 'bg-white/90 border border-sky-200/50 shadow-sky-100/50'
                : 'bg-white/90 border border-indigo-200/50 shadow-indigo-100/50'
        }`}>
          {/* Add new todo */}
          <div className="flex gap-3 mb-8">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What needs to be done?"
                className={`w-full px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 font-medium ${
                  isDarkMode
                    ? 'bg-slate-700/50 border border-slate-600 text-slate-200 placeholder-slate-400 focus:ring-blue-500/20 focus:border-blue-400'
                    : blueTheme === 'ocean'
                      ? 'bg-blue-50/50 border border-blue-200 text-slate-700 placeholder-blue-400 focus:ring-blue-500/20 focus:border-blue-400'
                      : blueTheme === 'sky'
                        ? 'bg-sky-50/50 border border-sky-200 text-slate-700 placeholder-sky-400 focus:ring-sky-500/20 focus:border-sky-400'
                        : 'bg-indigo-50/50 border border-indigo-200 text-slate-700 placeholder-indigo-400 focus:ring-indigo-500/20 focus:border-indigo-400'
                }`}
              />
            </div>
            <button
              onClick={addTodo}
              className={`px-6 py-3.5 text-white rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl active:scale-95 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:ring-blue-500/20'
                  : blueTheme === 'ocean'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 focus:ring-blue-500/20'
                    : blueTheme === 'sky'
                      ? 'bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 focus:ring-sky-500/20'
                      : 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:ring-indigo-500/20'
              }`}
            >
              Add
            </button>
          </div>

          {/* Todo list */}
          <div className="space-y-3">
            {todos.length === 0 ? (
              <div className="text-center py-12">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-colors duration-500 ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-slate-700 to-slate-800'
                    : blueTheme === 'ocean'
                      ? 'bg-gradient-to-br from-blue-100 to-cyan-100'
                      : blueTheme === 'sky'
                        ? 'bg-gradient-to-br from-sky-100 to-blue-100'
                        : 'bg-gradient-to-br from-indigo-100 to-blue-100'
                }`}>
                  <svg className={`w-8 h-8 transition-colors duration-500 ${
                    isDarkMode 
                      ? 'text-slate-400' 
                      : blueTheme === 'ocean'
                        ? 'text-blue-500'
                        : blueTheme === 'sky'
                          ? 'text-sky-500'
                          : 'text-indigo-500'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className={`font-medium transition-colors duration-500 ${
                  isDarkMode 
                    ? 'text-slate-300' 
                    : blueTheme === 'ocean'
                      ? 'text-blue-700'
                      : blueTheme === 'sky'
                        ? 'text-sky-700'
                        : 'text-indigo-700'
                }`}>No tasks yet</p>
                <p className={`text-sm mt-1 transition-colors duration-500 ${
                  isDarkMode 
                    ? 'text-slate-500' 
                    : blueTheme === 'ocean'
                      ? 'text-blue-500'
                      : blueTheme === 'sky'
                        ? 'text-sky-500'
                        : 'text-indigo-500'
                }`}>Add your first task above to get started</p>
              </div>
            ) : (
              todos.map(todo => (
                <div
                  key={todo.id}
                  className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                    isDarkMode
                      ? 'bg-slate-700/60 border border-slate-600/50 hover:bg-slate-700/80 hover:border-slate-500'
                      : blueTheme === 'ocean'
                        ? 'bg-blue-50/60 border border-blue-200/50 hover:bg-blue-50/80 hover:border-blue-300'
                        : blueTheme === 'sky'
                          ? 'bg-sky-50/60 border border-sky-200/50 hover:bg-sky-50/80 hover:border-sky-300'
                          : 'bg-indigo-50/60 border border-indigo-200/50 hover:bg-indigo-50/80 hover:border-indigo-300'
                  }`}
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className={`w-5 h-5 rounded-md focus:ring-2 transition-all duration-200 cursor-pointer ${
                        isDarkMode
                          ? 'text-blue-600 bg-slate-600 border-2 border-slate-500 focus:ring-blue-500/20'
                          : blueTheme === 'ocean'
                            ? 'text-blue-600 bg-white border-2 border-blue-300 focus:ring-blue-500/20'
                            : blueTheme === 'sky'
                              ? 'text-sky-600 bg-white border-2 border-sky-300 focus:ring-sky-500/20'
                              : 'text-indigo-600 bg-white border-2 border-indigo-300 focus:ring-indigo-500/20'
                      }`}
                    />
                    {todo.completed && (
                      <svg className={`absolute inset-0 w-5 h-5 pointer-events-none ${
                        isDarkMode
                          ? 'text-blue-600'
                          : blueTheme === 'ocean'
                            ? 'text-blue-600'
                            : blueTheme === 'sky'
                              ? 'text-sky-600'
                              : 'text-indigo-600'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`flex-1 font-medium transition-all duration-200 ${
                      todo.completed
                        ? isDarkMode ? 'text-slate-500 line-through' : 'text-slate-400 line-through'
                        : isDarkMode ? 'text-slate-200 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-800'
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className={`opacity-0 group-hover:opacity-100 p-2 rounded-lg transition-all duration-200 ${
                      isDarkMode
                        ? 'text-slate-500 hover:text-red-400 hover:bg-red-900/20'
                        : 'text-slate-400 hover:text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Stats */}
          {todos.length > 0 && (
            <div className={`mt-8 pt-6 transition-colors duration-500 ${
              isDarkMode ? 'border-t border-slate-600' : 'border-t border-slate-100'
            }`}>
              <div className="flex items-center justify-between text-sm">
                <span className={`font-medium transition-colors duration-500 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {todos.filter(todo => !todo.completed).length} of {todos.length} tasks remaining
                </span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}






































