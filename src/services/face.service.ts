import { FaceEntity } from '@/entities/face.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
class FaceService extends Repository<FaceEntity> {}
