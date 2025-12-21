/**
 * 문자열 포맷팅 유틸리티 함수
 * 
 * 데이터를 UI에 표시하기 위한 포맷팅 함수들을 제공합니다.
 */

/**
 * 역할 문자열을 레이블과 값으로 파싱합니다.
 * 
 * @param role - "레이블: 값" 형식의 문자열
 * @returns 파싱된 레이블과 값 객체
 * 
 * @example
 * ```typescript
 * parseRole("주요 역할: 레거시 리팩토링")
 * // => { label: "주요 역할", value: "레거시 리팩토링" }
 * ```
 */
export function parseRole(role: string): { label: string; value: string } {
    const colonIndex = role.indexOf(":");

    // 콜론이 없으면 전체를 값으로 처리 (레이블 없음)
    if (colonIndex === -1) {
        return { label: "", value: role };
    }

    // 콜론을 기준으로 레이블과 값 분리
    return {
        label: role.substring(0, colonIndex).trim(),
        value: role.substring(colonIndex + 1).trim(),
    };
}

/**
 * 설명 문자열을 레이블과 값으로 파싱합니다.
 * 콜론이 없으면 전체를 값으로 반환합니다.
 * 
 * @param description - "레이블: 값" 형식의 문자열
 * @returns 파싱된 레이블(선택)과 값 객체
 * 
 * @example
 * ```typescript
 * parseDescription("개요: 프로젝트 설명")
 * // => { label: "개요", value: "프로젝트 설명" }
 * 
 * parseDescription("단순 설명")
 * // => { label: undefined, value: "단순 설명" }
 * ```
 */
export function parseDescription(description: string): { label?: string; value: string } {
    const colonIndex = description.indexOf(":");

    // 콜론이 없으면 전체를 값으로 반환
    if (colonIndex === -1) {
        return { value: description };
    }

    // 콜론을 기준으로 분리하여 레이블과 값 반환
    return {
        label: description.substring(0, colonIndex).trim(),
        value: description.substring(colonIndex + 1).trim(),
    };
}

/**
 * 여러 개의 콜론이 포함된 문자열을 안전하게 파싱합니다.
 * 첫 번째 콜론만 구분자로 사용하고 나머지는 값에 포함됩니다.
 * 
 * @param text - 파싱할 문자열
 * @returns 파싱된 레이블과 값 객체
 * 
 * @example
 * ```typescript
 * parseLabelValue("시간: 09:00 ~ 18:00")
 * // => { label: "시간", value: "09:00 ~ 18:00" }
 * ```
 */
export function parseLabelValue(text: string): { label?: string; value: string } {
    return parseDescription(text);
}

/**
 * 텍스트에서 마크다운 링크를 파싱하여 React 노드로 변환합니다.
 * 
 * @param text - 마크다운 링크가 포함된 텍스트
 * @returns 파싱된 React 노드 배열 또는 원본 텍스트
 * 
 * @example
 * ```typescript
 * parseMarkdownLinks("텍스트 [링크](https://example.com) 더보기")
 * // => ["텍스트 ", <InlineLink />, " 더보기"]
 * ```
 */
export function parseMarkdownLinks(text: string): { parts: Array<{ type: 'text' | 'link', content: string, url?: string }> } {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: Array<{ type: 'text' | 'link', content: string, url?: string }> = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        // Add text before link
        if (match.index > lastIndex) {
            parts.push({
                type: 'text',
                content: text.substring(lastIndex, match.index)
            });
        }

        // Add link
        parts.push({
            type: 'link',
            content: match[1], // link text
            url: match[2]      // link url
        });

        lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
        parts.push({
            type: 'text',
            content: text.substring(lastIndex)
        });
    }

    return { parts: parts.length > 0 ? parts : [{ type: 'text', content: text }] };
}
