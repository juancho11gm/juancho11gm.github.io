import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import React, { ReactNode } from 'react';
import remarkGfm from 'remark-gfm';
import styles from './PostBody.module.css';
import classNames from 'classnames';

type HeadingProps = {
	children: ReactNode & ReactNode[];
	className: string;
};

const Heading = ({ className, children }: HeadingProps) => {
	console.log({ className, children });
	return <a href={`#`}>{children}</a>;
};

const generateSlug = (str: string) => {
	str = str?.replace(/^\s+|\s+$/g, '');
	str = str?.toLowerCase();
	const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
	const to = 'aaaaaeeeeiiiioooouuuunc------';

	for (let i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	str = str
		?.replace(/[^a-z0-9 -]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');

	return str;
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
		<div className={classNames('max-w-2xl mx-auto markdown', styles.markdown)}>
			<ReactMarkdown
				children={content}
				components={{
					code: (props) => (
						<CodeBlock
							children={props.children}
							className={props.className || ''}
						/>
					),
					h2: (props: any) => {
						const arr = props.children;
						let heading = '';

						for (let i = 0; i < arr.length; i++) {
							if (arr[i]?.type !== undefined) {
								for (let j = 0; j < arr[i].props.children.length; j++) {
									heading += arr[i]?.props?.children[0];
								}
							} else heading += arr[i];
						}

						const slug = generateSlug(heading);
						return (
							<h3 id={slug}>
								<a href={`#${slug}`} {...props}></a>
							</h3>
						);
					},
				}}
				remarkPlugins={[remarkGfm]}
			/>
		</div>
	);
};

export { PostBody };
