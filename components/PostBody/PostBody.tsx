import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import { ReactNode } from 'react';
import styles from './PostBody.module.css';
import classNames from 'classnames';

type CodeBlockProps = {
	children: ReactNode & ReactNode[];
	className: string;
};

const CodeBlock = ({ className, children }: CodeBlockProps) => {
	const match = /language-(\w+)/.exec(className || '');
	return (
		<div className='code-block'>
			<SyntaxHighlighter
				children={String(children).replace(/\n$/, '')}
				style={vscDarkPlus}
				language={match[1]}
			/>
		</div>
	);
};

type Props = {
	content: string;
};

const PostBody = ({ content }: Props) => {
	return (
		<div className={classNames('max-w-2xl mx-auto markdown', styles.markdown)}>
			<ReactMarkdown
				children={content}
				components={{
					code: (props) => (
						<CodeBlock children={props.children} className={props.className} />
					),
				}}
			/>
		</div>
	);
};

export { PostBody };
