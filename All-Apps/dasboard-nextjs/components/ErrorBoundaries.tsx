import React from "react";
import { UserFriendlyMessage } from "../components/UserFriendlyMessage";
import WarningEmoji from "../public/Warning.png";
import SadEmoji from "../public/SadEmoji.png";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <UserFriendlyMessage
          imageUrl={WarningEmoji}
          title={`Oops! Something went wrong!`}
          titleEmoji={SadEmoji}
          subTitle="Our best minds are working on fixing this! Refresh the page or try again later..."
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
