import slug from 'slug';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import React, { ReactNode } from 'react';
import remarkGfm from 'remark-gfm';
import styles from './PostBody.module.css';
import classNames from 'classnames';

type HeadingAnchorProps = {
	children: ReactNode & ReactNode[];
	level: number;
};

const HeadingAnchor = ({ children, level }: HeadingAnchorProps) => {
	const [heading] = children;
	const headingSlug = slug(heading as string);
	const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
	return (
		<HeadingTag id={headingSlug}>
			<a href={`#${headingSlug}`}>{heading}</a>
		</HeadingTag>
	);
};

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
				language={match?.[1]}
			/>
		</div>
	);
};

type Props = {
	content: string;
};

const PostBody = ({ content }: Props) => {
	return (
		<div className={classNames('max-w-3xl mx-auto markdown', styles.markdown)}>
			<ReactMarkdown
				children={content}
				components={{
					code: (props) => (
						<CodeBlock
							children={props.children}
							className={props.className || ''}
						/>
					),
					h1: (props) => (
						<HeadingAnchor children={props.children} level={props.level} />
					),
					h2: (props) => (
						<HeadingAnchor children={props.children} level={props.level} />
					),
					h3: (props) => (
						<HeadingAnchor children={props.children} level={props.level} />
					),
					h4: (props) => (
						<HeadingAnchor children={props.children} level={props.level} />
					),
					h5: (props) => (
						<HeadingAnchor children={props.children} level={props.level} />
					),
					h6: (props) => (
						<HeadingAnchor children={props.children} level={props.level} />
					),
				}}
				remarkPlugins={[remarkGfm]}
			/>
		</div>
	);
};

export { PostBody };
