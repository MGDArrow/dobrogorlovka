export function scrollActivation(ref: HTMLElement | null, activated: Ref<boolean>, PERCENT = 0.45){
		if (activated.value === true) return;
		if (ref === null) return;
		
		const doc = document.documentElement;
		if (doc.clientWidth > 768) return;
		
		const needScroll = doc.clientHeight * PERCENT + doc.scrollTop;
		const elementTop = ref?.offsetTop;
	
		if (elementTop <= needScroll) activated.value = true;
}

export function scrollActivationLeft(ref: HTMLElement | null, parent: HTMLElement | null, activated: Ref<boolean>, PERCENT = 0.45){
		if (activated.value === true) return;
		if (ref === null) return;
		if (parent === null) return;
		
		const doc = document.documentElement;
		if (doc.clientWidth > 768) return;
		
		const needScroll = doc.clientHeight * PERCENT + doc.scrollTop;
		const elementTop = parent?.offsetTop;

		const needScrollLeft = ref.offsetLeft - ref.clientWidth * PERCENT;
		const elementLeft = parent?.scrollLeft as number;

		if ((elementTop <= needScroll) && (needScrollLeft <= elementLeft)) activated.value = true;
}

export function getRandomColor() {
	const number = Math.random();
	return number > 0.75 ? 'var(--color-pink)' : number > 0.5 ? 'var(--color-green)' : number > 0.25 ? 'var(--color-blue)' : 'var(--color-orange)';
}