import { Socials } from '@/interfaces';
import Image from 'next/image';
import styles from './Socials.module.scss';

interface socialsProps {
	socials?: Socials[];
	className?: string;
	iconClass?: string;
	height?: number;
	width?: number;
}

const Socials = ({
	socials,
	className,
	iconClass,
	height = 17,
	width = 17,
}: socialsProps) => {
	return (
		<div className={`${styles.socials} ${className}`}>
			{socials?.map((social: any, index: number) => {
				return (
					<div className={`${styles.social} ${iconClass}`} key={index}>
						<a
							href={social.url}
							target="_blank"
							rel="noreferrer"
							style={{
								width: `${width / 10}rem`,
								height: `${height / 10}rem`,
							}}
						>
							<Image
								src={social.icon}
								alt=""
								layout="fill"
								title={social.title}
							/>
						</a>
					</div>
				);
			})}
		</div>
	);
};

export default Socials;
