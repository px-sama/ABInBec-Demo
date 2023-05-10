import React from "react"
import Prism, { defaultProps } from "prism-react-renderer"
import DarkTheme from "../../internals/prism-dracula"
import LightTheme from "../../internals/prism-github"

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

const Highlight = ({
  code,
  theme = "dark",
  language
}: {
  code: string
  theme?: "light" | "dark"
  language: string
}) => (
  <div>
    {/* Default to dark theme for demo purpose */}
    <Prism
      {...defaultProps}
      language={language}
      code={code}
      theme={DarkTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Prism>
  </div>
)

export default Highlight
