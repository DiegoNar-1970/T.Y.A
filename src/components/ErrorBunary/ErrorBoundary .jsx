import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para mostrar la UI de respaldo
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error capturado por ErrorBoundary:', error);
    console.error('Stack del componente:', info.componentStack);
    // Aquí podrías enviar esto a un servicio como Sentry o similar
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <p>Algo salió mal.</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
