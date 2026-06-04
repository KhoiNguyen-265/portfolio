import { project01, project02 } from "../../../assets/images";
import type { IProject } from "../types";

export const PROJECTS_DATA: IProject[] = [
    {
        id: 1,
        imgPath: project01,
        title: {
            en: "StudyShare",
            vi: "StudyShare",
        },
        desc: {
            en: "A platform for sharing documents and learning resources among students. Features document uploads, search, ratings, and study groups.",
            vi: "Nền tảng chia sẻ tài liệu và tài nguyên học tập giữa các sinh viên. Hỗ trợ tải lên, tìm kiếm, đánh giá tài liệu và kết nối nhóm học tập.",
        },
        githubLink: "https://github.com/KhoiNguyen-265/studyshare",
        demoLink: "#!",
    },
    {
        id: 2,
        imgPath: project02,
        title: {
            en: "SmartLearn",
            vi: "SmartLearn",
        },
        desc: {
            en: "AI Math tutor system for grade 6-12 students. Integrates DeepSeek chatbot, Gemini OCR for math problems, adaptive quizzes, and personalized learning progress tracking.",
            vi: "Hệ thống gia sư Toán AI cho học sinh từ lớp 6-12. Tích hợp chatbot gia sư AI (DeepSeek), quét ảnh bài toán qua Gemini OCR, sinh quiz theo năng lực và theo dõi tiến trình học tập cá nhân hóa.",
        },
        githubLink: "https://github.com/KhoiNguyen-265/nckh_2025-2026",
        demoLink: "#!",
    },
];
