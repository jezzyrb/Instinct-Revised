"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleCommentEntity = void 0;
const article_entity_1 = require("./article.entity");
const user_entity_1 = require("../user/user/user.entity");
const typeorm_1 = require("typeorm");
let ArticleCommentEntity = class ArticleCommentEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ArticleCommentEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], ArticleCommentEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'timestamp', type: 'int' }),
    __metadata("design:type", Number)
], ArticleCommentEntity.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    __metadata("design:type", Number)
], ArticleCommentEntity.prototype, "userID", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], ArticleCommentEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ name: 'article_id' }),
    __metadata("design:type", Number)
], ArticleCommentEntity.prototype, "articleID", void 0);
__decorate([
    typeorm_1.ManyToOne(() => article_entity_1.ArticleEntity, article => article.comments),
    typeorm_1.JoinColumn({ name: 'article_id' }),
    __metadata("design:type", article_entity_1.ArticleEntity)
], ArticleCommentEntity.prototype, "article", void 0);
ArticleCommentEntity = __decorate([
    typeorm_1.Entity('instinct_article_comments')
], ArticleCommentEntity);
exports.ArticleCommentEntity = ArticleCommentEntity;